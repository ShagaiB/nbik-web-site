import { gql } from '@apollo/client'

const GET_ALL_OT_PROJECTS = gql`
query{
  projects{
    id,
    title_mn,
    title_en,
    content_mn,
    content_en,
    image{
      url
    }
    heroimage{
      url
    }
    slug,
    categories{
      name
    }
  }
}
`;

const GET_ALL_SERVICES = gql`
query{
  services{
    id,
    title_mn,
    title_en,
    description_mn,
    description_en,
    content_mn,
    content_en,
    image{
      url
    }
    heroimage{
      url
    }
    slug,
  }
}
`;

export { GET_ALL_OT_PROJECTS, GET_ALL_SERVICES }