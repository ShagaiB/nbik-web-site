import { gql } from '@apollo/client'

const GET_ALL_OT_PROJECTS = gql`
query{
    projects{
       id
      title_mn
      title_en
      slug
      content_mn
      content_en
      thumbnail{
        url
      }
      photos {
       url
      }
      mainpicture{
        url
      }
      categories{
      prolocation
    }
    
    }
    
  }
`;

export { GET_ALL_OT_PROJECTS }