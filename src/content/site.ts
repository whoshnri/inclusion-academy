export const serviceGroups = [
  {
    id: "schools",
    eyebrow: "Education Practice",
    title: "Education Practice",
    items: [
      {
        title: "School Improvement Review",
        description:
          "A structured ten-day independent review of your school's leadership, teaching practice, learner support, parent partnerships, safeguarding and culture. You leave with a clear picture of what is working, where the risks sit and exactly where to focus first.",
      },
      {
        title: "Parent Partnership Programme",
        description:
          "A practical review of how your school communicates and works with parents, identifying where trust has broken down and what needs to change. You leave with clear communication standards, an escalation framework and a parent engagement strategy your staff can implement immediately.",
      },
      {
        title: "Supporting Every Learner Programme",
        description:
          "A focused review of how your school currently supports children who learn differently, combined with practical support to strengthen staff capability. You leave with classroom strategies, individual support recommendations and a leadership action plan that helps improve learner outcomes and reduces unnecessary exclusions.",
      },
    ],
  },
  {
    id: "ngos",
    eyebrow: "Social Impact Practice",
    title: "Social Impact Practice",
    items: [
      {
        title: "Programme Effectiveness Review",
        description:
          "A structured review of how well your programmes are reaching the people they were designed to serve, where delivery is breaking down and why engagement varies. You leave with a performance dashboard, a gap analysis and a prioritised improvement plan your leadership team can act on.",
      },
      {
        title: "Community Engagement Review",
        description:
          "An assessment of how communities currently experience your organisation, where trust is missing and what is preventing participation. You leave with a stakeholder map, a participation analysis and a practical engagement improvement plan.",
      },
      {
        title: "Programme Delivery Workshop",
        description:
          "A practical programme designed to strengthen consistency across field teams, improve community engagement and equip staff with practical tools they can apply immediately. You leave with a programme delivery guide, a community engagement toolkit and a 90-day implementation plan.",
      },
    ],
  },
  {
    id: "organisations",
    eyebrow: "Organisation Development Practice",
    title: "Organisation Development Practice",
    items: [
      {
        title: "Organisation Performance Review",
        description:
          "A structured review of the leadership, culture and people issues affecting organisational performance, identifying root causes rather than surface symptoms. You leave with an executive summary, a performance dashboard and a priority improvement plan your leadership team can begin acting on immediately.",
      },
      {
        title: "Leadership Effectiveness Review",
        description:
          "An independent assessment of leadership capability across your organisation, identifying strengths, risks, behavioural patterns and development priorities. You leave with a leadership capability summary, executive feedback and a 90-day leadership action plan.",
      },
      {
        title: "Workplace Experience Workshop",
        description:
          "A facilitated programme that strengthens communication, teamwork and leadership consistency across the organisation. You leave with a practical team action plan and a 90-day implementation guide.",
      },
    ],
  },
] as const;

export const contactDiscussionPoints = [
  "Your organisation and context",
  "Current strengths and challenges",
  "The people and communities involved",
  "The outcomes you want to improve",
  "Whether a School Improvement Review or custom engagement is the right starting point",
] as const;
