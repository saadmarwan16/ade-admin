import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsCategories extends Struct.ComponentSchema {
  collectionName: 'components_components_categories';
  info: {
    description: '';
    displayName: 'Categories';
    icon: 'grid';
  };
  attributes: {
    title: Schema.Attribute.Enumeration<
      [
        'Personal',
        'Social',
        'Political',
        'Professional',
        'Ki\u015Fisel',
        'Sosyal',
        'Siyasal',
        'Profesyonel',
        'Personnel',
        'Sociale',
        'Politique',
        'Professionnel',
      ]
    >;
  };
}

export interface ComponentsDetailsOfMe extends Struct.ComponentSchema {
  collectionName: 'components_components_details_of_mes';
  info: {
    description: '';
    displayName: 'Details of Me';
    icon: 'heart';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 100;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
        minLength: 2;
      }>;
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

export interface ComponentsInstagram extends Struct.ComponentSchema {
  collectionName: 'components_components_instagrams';
  info: {
    description: '';
    displayName: 'Instagram';
    icon: 'twitter';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsLinkedin extends Struct.ComponentSchema {
  collectionName: 'components_components_linkedins';
  info: {
    description: '';
    displayName: 'Linkedin';
    icon: 'twitter';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsLogos extends Struct.ComponentSchema {
  collectionName: 'components_components_logos';
  info: {
    description: '';
    displayName: 'Logos';
    icon: 'twitter';
  };
  attributes: {
    company: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ComponentsProjects extends Struct.ComponentSchema {
  collectionName: 'components_components_projects';
  info: {
    description: '';
    displayName: 'Projects';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 100;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    project_types: Schema.Attribute.Relation<
      'oneToMany',
      'api::project-type.project-type'
    >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 150;
        minLength: 15;
      }>;
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

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.categories': ComponentsCategories;
      'components.details-of-me': ComponentsDetailsOfMe;
      'components.email': ComponentsEmail;
      'components.instagram': ComponentsInstagram;
      'components.linkedin': ComponentsLinkedin;
      'components.logos': ComponentsLogos;
      'components.projects': ComponentsProjects;
      'components.single-avatar': ComponentsSingleAvatar;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
