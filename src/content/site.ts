export const faqItems = [
  {
    question: "What is an Inclusion Health Check?",
    answer:
      "It is a structured assessment of your organisation's current approach to inclusion. We review strengths, gaps, risks and opportunities, then provide prioritised recommendations and a practical implementation roadmap.",
  },
  {
    question: "Who is the Health Check designed for?",
    answer:
      "It is designed for schools, NGOs, charities, healthcare providers, community organisations, public sector bodies and employers that want to strengthen inclusive practice and improve outcomes.",
  },
  {
    question: "How long does an assessment take?",
    answer:
      "Timelines depend on your organisation's size, scope and stakeholder groups. During the discovery conversation, we agree a clear schedule that gives the assessment enough depth while respecting operational priorities.",
  },
  {
    question: "What does the assessment involve?",
    answer:
      "Every engagement includes leadership conversations, document review, stakeholder feedback, gap analysis, risk assessment, prioritised recommendations and an implementation roadmap.",
  },
  {
    question: "Which documents will you review?",
    answer:
      "The document list is agreed with you and may include relevant policies, strategies, communications, programme materials, feedback data and existing action plans. We only request evidence that supports the agreed scope.",
  },
  {
    question: "How are staff and stakeholders involved?",
    answer:
      "We agree the right mix of conversations, feedback activities and engagement sessions with your leadership team. The aim is to understand lived experience, implementation barriers and practical opportunities for improvement.",
  },
  {
    question: "Is stakeholder feedback confidential?",
    answer:
      "We agree confidentiality and reporting arrangements before the assessment begins. Findings are presented in a way that supports honest insight, responsible governance and constructive action.",
  },
  {
    question: "What will we receive at the end?",
    answer:
      "You receive a clear account of strengths, gaps and risks, together with prioritised recommendations and a practical implementation roadmap. We also discuss the findings with your leadership team.",
  },
  {
    question: "Does the Health Check only assess compliance?",
    answer:
      "No. Compliance can form part of the context, but the Health Check focuses on implementation, culture, behaviours, systems, engagement and accountability.",
  },
  {
    question: "Can Inclusion Academy support implementation?",
    answer:
      "Yes. Following the assessment, we can discuss leadership development, team workshops, engagement frameworks and change support aligned with your priorities.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a Discovery Conversation. We will discuss your context, priorities, intended outcomes and the most useful scope for your organisation.",
  },
] as const;

export const serviceGroups = [
  {
    id: "schools",
    eyebrow: "For schools",
    title: "Inclusive schools",
    items: [
      {
        title: "Inclusive Schools Review",
        description:
          "A structured assessment of leadership, culture, parent engagement, communication, SEND provision and inclusive practice.",
      },
      {
        title: "Parent Engagement and Trust Review",
        description:
          "Helping schools strengthen relationships with families, improve communication and reduce conflict.",
      },
      {
        title: "Leadership Development",
        description:
          "Supporting school leaders to create cultures where inclusion becomes part of everyday decision-making.",
      },
      {
        title: "Staff Development Workshops",
        description:
          "Practical training designed to increase confidence and capability when supporting diverse learners and engaging with families.",
      },
    ],
  },
  {
    id: "ngos",
    eyebrow: "For NGOs",
    title: "Inclusive programmes",
    items: [
      {
        title: "Inclusion Health Check",
        description:
          "Assessing governance, programmes, community engagement and accessibility through an inclusion lens.",
      },
      {
        title: "Community Engagement Frameworks",
        description:
          "Helping organisations build meaningful relationships with the communities they serve.",
      },
      {
        title: "Programme Design and Review",
        description:
          "Supporting teams to embed inclusion throughout programme planning, delivery and evaluation.",
      },
      {
        title: "Leadership and Team Development",
        description:
          "Building capability across staff teams and leadership groups.",
      },
    ],
  },
  {
    id: "organisations",
    eyebrow: "For organisations",
    title: "Inclusive workplaces",
    items: [
      {
        title: "Workplace Inclusion Review",
        description:
          "Assessing organisational culture, employee experience, accessibility and leadership capability.",
      },
      {
        title: "Inclusive Leadership Development",
        description:
          "Equipping leaders with practical tools to create inclusive teams and cultures.",
      },
      {
        title: "Culture and Engagement Assessments",
        description:
          "Understanding employee experiences and identifying opportunities for improvement.",
      },
      {
        title: "Change and Transformation Support",
        description:
          "Helping organisations manage change in ways that strengthen inclusion and engagement.",
      },
    ],
  },
] as const;

export const healthCheckIncludes = [
  "Leadership conversations",
  "Document review",
  "Stakeholder feedback",
  "Gap analysis",
  "Risk assessment",
  "Prioritised recommendations",
  "Implementation roadmap",
] as const;

export const contactDiscussionPoints = [
  "Your organisation and context",
  "Current strengths and challenges",
  "The people and communities involved",
  "The outcomes you want to improve",
  "Whether an Inclusion Health Check is the right starting point",
] as const;
