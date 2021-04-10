import React, { useState } from "react"
import Button from "../Button/button"
import Input from "../Input/input"
import MailchimpSubscribe from "react-mailchimp-subscribe"

import {
  NewsletterWrapper,
  NewsletterInnerWrapper,
  NewsletterTitle,
  NewsletterDescription,
  NewsletterInputWrapper,
  ErrorMessage,
  SuccessMessage,
} from "./newsletter.style"

type NewsletterProps = {}
const MAILCHIMP_URL =
  "https://gmail.us3.list-manage.com/subscribe/post?u=7b240cd35ea9001459c3bc91a&amp;id=d0ed7120e8"

const Newsletter: React.FunctionComponent<NewsletterProps> = ({ ...props }) => {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState()
  const [error, setError] = useState()
  const handleChange = (e: any) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setSuccess(undefined)
    setError(undefined)
    console.log("Adding to newsletter")
  }
  return (
    <NewsletterWrapper {...props}>
      <NewsletterInnerWrapper>
        <NewsletterTitle>
          Get The Best Of All Hands Delivered To Your Inbox
        </NewsletterTitle>
        <NewsletterDescription>
          Subscribe to our newsletter and stay updated.
        </NewsletterDescription>
        <MailchimpSubscribe url={MAILCHIMP_URL} />
        <NewsletterInputWrapper onSubmit={handleSubmit}>
          {success ? (
            <SuccessMessage>{success} 🙂</SuccessMessage>
          ) : (
            <>
              <Input
                type="email"
                name="email"
                placeholder="Write your email here"
                onChange={handleChange}
                value={email}
                required
              />
              <Button title="Subscribe" type="submit" />
            </>
          )}
        </NewsletterInputWrapper>
        {error && (
          <ErrorMessage
            dangerouslySetInnerHTML={{ __html: `<span>*</span>${error}` }}
          />
        )}
      </NewsletterInnerWrapper>
    </NewsletterWrapper>
  )
}

export default Newsletter
