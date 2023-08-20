import Layout from 'components/Layout';
import PersonalBlog from 'containers/HomePage';
import { GET_ALL_POSTS } from 'lib/graphql/api';
import { graphcms } from 'services/graphcms/init';
import { GetAllPosts, GraphPost } from 'types/post';

interface Props {
  posts: GraphPost[];
}
export function Index({ posts }: Props) {
  return (
    <Layout>
      <PersonalBlog posts={posts ?? []} />
    </Layout>
  );
}
export const getStaticProps = async () => {
  const { blogPosts } = await graphcms.request<GetAllPosts>(GET_ALL_POSTS);
  return { props: { posts: blogPosts } };
};

export default Index;
