import { GraphQLClient } from 'graphql-request';
import { GetAllPosts } from '../types/post';
import Layout from './components/layout';
import PersonalBlog from './containers/HomePage';
import { GET_ALL_POSTS } from './lib/graphql/api';
const graphcms = new GraphQLClient(
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cll67qzsz10ad01uoff4f01vj/master'
);

export default async function Index() {
  const { blogPosts } = await graphcms.request<GetAllPosts>(GET_ALL_POSTS);
  return (
    <Layout>
      <PersonalBlog posts={blogPosts} />
    </Layout>
  );
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
}
