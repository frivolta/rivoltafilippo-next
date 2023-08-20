'use client';

import Layout from './components/layout';
import PersonalBlog from './containers/HomePage';

export default async function Index() {
  //const { blogPosts } = await graphcms.request<GetAllPosts>(GET_ALL_POSTS);
  return (
    <Layout>
      <p>test</p>
    </Layout>
  );
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
}
