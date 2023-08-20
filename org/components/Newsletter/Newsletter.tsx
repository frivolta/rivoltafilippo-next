import React, { useState } from "react"
import Button from "../Button/button"
import Input from "../Input/input"

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
  }
  return (
    <NewsletterWrapper {...props}>
      <NewsletterInnerWrapper>
        <NewsletterTitle>
          Get The Best Of All Hands Delivered To Your Inbox
        </NewsletterTitle>
        <NewsletterDescription>
          Newsletter subscription is temprarily disabled 🙂
        </NewsletterDescription>
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
                disabled
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
