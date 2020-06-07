import fetch from 'node-fetch'

const mailchimp = async (email: string) => {
  if (!email) {
    return {
      status: 400,
      error: 'Email is required',
    }
  }

  try {
    const LIST_ID = process.env.MAILCHIMP_LIST_ID
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const DATACENTER = API_KEY?.split('-')[1]

    const data = {
      email_address: email,
      status: 'subscribed',
    }

    const response = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
      body: JSON.stringify(data),
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    if (response.status >= 400) {
      return {
        status: 400,
        error: `There was an error subscribing to the newsletter. Shoot me an email at [me@leerob.io] and I'll add you to the list.`,
      }
    }

    return {
      status: 201,
      error: '',
    }
  } catch (error) {
    return {
      status: 500,
      error: error.message || error.toString(),
    }
  }
}

export default mailchimp
