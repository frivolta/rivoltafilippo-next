import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const LIST_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;

    if (!LIST_ID || !API_KEY) {
      throw new Error('Missing environment variables');
    }

    const DATACENTER = API_KEY.split('-')[1];

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
        }),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    );

    if (response.status >= 400) {
      const text = await response.json();
      throw text;
    }

    return res.status(200).json({ message: 'You are now subscribed!' });
  } catch (error: any) {
    return res
      .status(error.status || 500)
      .json({ error: error.title || error.toString() });
  }
};
