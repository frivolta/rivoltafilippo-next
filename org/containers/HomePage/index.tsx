import * as React from 'react';
import PersonalBlogWrapper from './style';
import Intro from './Intro';
import Posts from './Posts';
import { GraphPost } from '../../types/post';

interface PersonalBlogProps {
  posts: GraphPost[];
}

const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = ({
  posts,
}) => {
  return (
    <PersonalBlogWrapper>
      <Intro />
      <Posts posts={posts} />
    </PersonalBlogWrapper>
  );
};

export default PersonalBlog;
