import gql from 'graphql-tag';


const Fragments = {
  applicationProfile: gql`
  fragment ApplicationProfileFragment on ApplicationProfile {
    id
    name
    enabled
    applicationId
  }
  `,
  application: gql`
  fragment ApplicationFragment on Application {
    id
    name
  }
  `,
  session: gql`
  fragment SessionFragment on Session {
    id
    clientId
    applicationId
    applicationProfileId
  }
  `
}

export const fullStateSubscription = gql`
${Fragments.applicationProfile}
${Fragments.application}
${Fragments.session}
subscription {
	auditEvents {
		payload {
      ... on ApplicationCreatedEvent {
        application {
          ...ApplicationFragment
        }
      }
      ... on ApplicationDeletedEvent {
        id
      }
      ... on ApplicationProfileCreatedEvent {
        applicationProfile {
          ...ApplicationProfileFragment
        }
      }
      ... on ApplicationProfileDeletedEvent {
        id
      }
      ... on SessionConnectedEvent {
        session {
         ...SessionFragment
        }
      }
      ... on SessionDisconnectedEvent {
        id
      }
    }
  }
}
`

export const fullStateQuery = gql`
${Fragments.applicationProfile}
${Fragments.application}
${Fragments.session}
query {
  applications {
    ...ApplicationFragment
  }
  applicationProfiles {
    ...ApplicationProfileFragment
  }
  topics {
    name
    guessedContentType
    applicationId
    messageCount
    sizeInBytes
    lastRecord {
      payload
      sentAt
      sentBy
      topicName
    }
  }
  sessions {
    ...SessionFragment
  }
}
`

export const getTopicRecords = gql`query GetTopicRecords($pattern: String) {
  topics(pattern: $pattern) {
    records {
      payload
      sentAt
      sentBy
      topicName
    }
  }
}
`