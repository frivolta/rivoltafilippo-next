import _ from 'lodash';
import {
  PostDetailsWrapper,
  PostTitle,
  PostDate,
  PostPreview,
  PostDescriptionWrapper,
  PostDescription,
} from './postDetails.style';
import Image from 'next/legacy/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type PostDetailsProps = {
  title: string;
  date: string;
  preview?: any;
  description: any;
  markdownContent: string;
  tags?: [];
  className?: string;
  imagePosition?: 'left' | 'top';
};
interface LinkProps {
  href: string;
  children: any;
}
const PostDetails: React.FunctionComponent<PostDetailsProps> = ({
  title,
  date,
  preview,
  description,
  tags,
  className,
  imagePosition,
  markdownContent,
  ...props
}) => {
  const addClass: string[] = ['post_details'];

  if (imagePosition == 'left') {
    addClass.push('image_left');
  }

  if (className) {
    addClass.push(className);
  }

  const dateFormatter = (date: string): string => {
    const newDate = new Date(date);
    const month = newDate.toLocaleString('default', { month: 'short' });
    const year = newDate.toLocaleString('default', { year: 'numeric' });
    return `${newDate.getDate()} ${month} ${year}`;
  };

  return (
    <PostDetailsWrapper {...props} className={addClass.join(' ')}>
      {imagePosition == 'left' ? (
        <>
          {preview == null ? null : (
            <PostPreview className="post_preview">
              <Image src={preview} alt={title} />
            </PostPreview>
          )}
        </>
      ) : (
        ''
      )}

      {imagePosition == 'top' ? (
        <>
          <PostTitle>{title}</PostTitle>
          <PostDate>{dateFormatter(date)}</PostDate>
        </>
      ) : (
        ''
      )}

      {imagePosition == 'top' ? (
        <>
          {preview == null ? null : (
            <PostPreview className="post_preview">
              <Image
                src={preview}
                alt="title"
                layout="responsive"
                width={1170}
                height={500}
              />
            </PostPreview>
          )}
        </>
      ) : (
        ''
      )}
      <PostDescriptionWrapper className="post_des_wrapper">
        {imagePosition == 'left' ? (
          <>
            <PostTitle>{title}</PostTitle>
            <PostDate>{date}</PostDate>
          </>
        ) : (
          ''
        )}
        <PostDescription className="post_des">
          <ReactMarkdown
            children={markdownContent}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '') || "typescript";
                
                return !inline && match ? (
                  <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, '')}
                    style={dark}
                    language={match[1]}
                    PreTag="div"
                  />
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </PostDescription>
      </PostDescriptionWrapper>
    </PostDetailsWrapper>
  );
};

PostDetails.defaultProps = {
  imagePosition: 'top',
};

export default PostDetails;
