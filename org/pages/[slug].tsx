import React from 'react';

import {
  BlogPostDetailsWrapper,
  BlogPostFooter,
} from '../theme/templates.style';
import { GetAllSlugs, GetPostBySlug, GraphPost, PostApi } from '../types/post';
import { GET_ALL_SLUGS, GET_POST_BY_SLUG } from '../lib/graphql/api';
import Layout from 'components/Layout';
import SEO from 'components/Seo/Seo';
import PostDetails from 'components/PostDetails/PostDetails';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { graphcms } from 'services/graphcms/init';
import markdownToHtml from 'lib/markdown/markdownToHtml';

type PostWithMarkdown = GraphPost & { markdownContent: string };

interface Props {
  post: PostWithMarkdown;
  morePosts: PostApi[];
  preview?: boolean;
}

const BlogPostTemplate = ({ post }: Props) => {
  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />
      <BlogPostDetailsWrapper>
        <PostDetails
          title={post.title}
          date={post.date}
          preview={post.coverImage.url}
          description={post.content}
          markdownContent={post.markdownContent}
        />

        <BlogPostFooter></BlogPostFooter>
      </BlogPostDetailsWrapper>
    </Layout>
  );
};

export default BlogPostTemplate;

export async function getStaticProps({ params }: Params) {
  const { blogPost } = await graphcms.request<GetPostBySlug, { slug: string }>(
    GET_POST_BY_SLUG,
    { slug: params.slug }
  );
  const content = await markdownToHtml(blogPost.content || '');
  const markdownContent = blogPost.content;
  return {
    props: {
      post: {
        ...blogPost,
        content,
        markdownContent,
      },
    },
  };
}

export async function getStaticPaths() {
  const { blogPosts } = await graphcms.request<GetAllSlugs>(GET_ALL_SLUGS);

  return {
    paths: blogPosts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
