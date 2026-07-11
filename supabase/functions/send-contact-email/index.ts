import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

interface ContactPayload {
  name: string
  email: string
  message: string
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, message } = (await req.json()) as ContactPayload

    // Basic server-side validation
    if (
      !name || typeof name !== 'string' || name.trim().length === 0 || name.length > 100 ||
      !email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255 ||
      !message || typeof message !== 'string' || message.trim().length < 10 || message.length > 500
    ) {
      return new Response(JSON.stringify({ error: 'Invalid input' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const serviceId = Deno.env.get('EMAILJS_SERVICE_ID')
    const templateId = Deno.env.get('EMAILJS_TEMPLATE_ID')
    const publicKey = Deno.env.get('EMAILJS_PUBLIC_KEY')

    if (!serviceId || !templateId || !publicKey) {
      return new Response(JSON.stringify({ error: 'Email service not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const emailjsRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // EmailJS requires an Origin header for non-browser requests
        'origin': 'http://localhost',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: name,
          from_email: email,
          message: message,
          sent_at: new Date().toLocaleString(),
          subject: `New Portfolio Contact from ${name}`,
        },
      }),
    })

    if (!emailjsRes.ok) {
      const errText = await emailjsRes.text()
      console.error('EmailJS error:', emailjsRes.status, errText)
      return new Response(
        JSON.stringify({ error: 'Failed to send email', details: errText }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      )
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('send-contact-email error:', err)
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
