import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    keywords: Schema.Attribute.Text;
    metaRobots: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
    metaViewport: Schema.Attribute.String;
    canonicalURL: Schema.Attribute.String;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface ComponentsSingleAvatar extends Struct.ComponentSchema {
  collectionName: 'components_components_single_avatars';
  info: {
    displayName: 'Single Avatar';
    icon: 'user';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ComponentsProjects extends Struct.ComponentSchema {
  collectionName: 'components_components_projects';
  info: {
    displayName: 'Projects';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<['Projects', 'Companies', 'NGOs']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 15;
        maxLength: 150;
      }>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 100;
        maxLength: 350;
      }>;
    link: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ComponentsLogos extends Struct.ComponentSchema {
  collectionName: 'components_components_logos';
  info: {
    displayName: 'Logos';
    icon: 'twitter';
  };
  attributes: {
    company: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsLinkedin extends Struct.ComponentSchema {
  collectionName: 'components_components_linkedins';
  info: {
    displayName: 'Linkedin';
    icon: 'twitter';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsInstagram extends Struct.ComponentSchema {
  collectionName: 'components_components_instagrams';
  info: {
    displayName: 'Instagram';
    icon: 'twitter';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsEmail extends Struct.ComponentSchema {
  collectionName: 'components_components_emails';
  info: {
    displayName: 'email';
  };
  attributes: {
    email: Schema.Attribute.Email & Schema.Attribute.Required;
  };
}

export interface ComponentsDetailsOfMe extends Struct.ComponentSchema {
  collectionName: 'components_components_details_of_mes';
  info: {
    displayName: 'Details of Me';
    icon: 'heart';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
        maxLength: 150;
      }>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 75;
        maxLength: 450;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ComponentsCategories extends Struct.ComponentSchema {
  collectionName: 'components_components_categories';
  info: {
    displayName: 'Categories';
    icon: 'grid';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.Enumeration<
      ['Personal', 'Social', 'Political', 'Professional']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'components.single-avatar': ComponentsSingleAvatar;
      'components.projects': ComponentsProjects;
      'components.logos': ComponentsLogos;
      'components.linkedin': ComponentsLinkedin;
      'components.instagram': ComponentsInstagram;
      'components.email': ComponentsEmail;
      'components.details-of-me': ComponentsDetailsOfMe;
      'components.categories': ComponentsCategories;
    }
  }
}
