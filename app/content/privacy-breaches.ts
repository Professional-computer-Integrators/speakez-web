export type Breach = {
  id: string;
  title: string;
  risk: string;
  eliminated: string;
  detail: string;
};

export const breaches: Breach[] = [
  {
    id: "centralized-breach",
    title: "Centralized data breaches",
    risk: "One hacked vendor exposes millions of conversations at once — it's happened to the biggest names in messaging, more than once.",
    eliminated: "Run your own On-Prem node and your traffic never touches our shared cluster, so a breach of our infrastructure has nothing of yours to reach.",
    detail:
      "Consumer and enterprise messaging platforms concentrate accounts' worth of traffic behind a single shared backend. When that backend is breached, everyone relaying through it is affected at once. SpeakEZ's own shared network only ever handles already-encrypted ciphertext, so even there a breach cannot expose message content — but if your organization needs its traffic isolated from every other user of our network too, On-Prem puts it on a node only you operate.",
  },
  {
    id: "shared-network-logs",
    title: "Shared network access logs",
    risk: "Our shared network keeps brief access logs (egress IP, timing) for abuse prevention, the same as any relay service — logs that, however limited, still involve infrastructure outside your organization.",
    eliminated: "On-Prem means those logs, if you keep any at all, live only on hardware your own organization controls.",
    detail:
      "Any shared relay needs some minimal operational logging to prevent abuse of the service — SpeakEZ's shared network is no different, and keeps limited access logs for a short retention window. Message content is never in those logs; SpeakEZ's relay only ever sees encrypted ciphertext. Still, for organizations that want zero infrastructure shared with other users, running an On-Prem node removes even that limited shared logging from the equation entirely.",
  },
  {
    id: "metadata",
    title: "Metadata harvesting",
    risk: "Even apps that encrypt message content often log who you talked to, when, and how often — a detailed map of your organization's relationships.",
    eliminated: "SpeakEZ doesn't build that map anywhere. No analytics SDKs, no behavioural tracking, on our network or yours.",
    detail:
      "Who contacted whom, at what time, and how frequently is metadata — and it's exactly the pattern investigators, journalists, and attackers piece together to reconstruct relationships, often without reading a single message. Many messaging platforms retain this as an operational byproduct of an advertising or analytics business model. SpeakEZ has no such business model: no analytics SDKs, no ad targeting, no behavioural profiling, whether you're on our shared network or running your own On-Prem node.",
  },
  {
    id: "insider-access",
    title: "Vendor insider access to content",
    risk: "Employees and contractors at a messaging platform can, and demonstrably have, accessed private user messages at other companies.",
    eliminated: "SpeakEZ's own encryption design means there is no plaintext for anyone at the company to access, ever — by architecture, not policy.",
    detail:
      "A hosted messaging service typically employs engineers and support staff who have some level of access to the infrastructure storing conversations, and internal abuse of that access has been documented at more than one major platform. SpeakEZ's end-to-end encryption means encryption keys are generated and held only on end-user devices; the relay, ours or an On-Prem node you run, only ever handles ciphertext it cannot decrypt. There's no server-side key escrow for anyone, inside the company or out, to misuse.",
  },
  {
    id: "sim-swap",
    title: "SIM-swap account takeover",
    risk: "Phone-number-based identity lets an attacker port your number to a new SIM and take over your messaging account, often within minutes.",
    eliminated: "SpeakEZ never uses a phone number as identity — there's no number to port, on any deployment.",
    detail:
      "Many messaging platforms use a phone number as the root of account identity, which means anyone who can convince a mobile carrier to reassign that number can take over the account. SpeakEZ requires no phone number and no email to set up — identity is a pseudonym and a locally held key pair, established through a direct invite exchange between devices rather than a public phone-number directory.",
  },
  {
    id: "residency",
    title: "Cross-border data residency",
    risk: "Messages routed through a global provider's cloud can end up cached or replicated in whichever country that provider's infrastructure happens to sit in.",
    eliminated: "With On-Prem, encrypted traffic relays through a node physically located wherever you place it.",
    detail:
      "Global messaging providers route and cache data across whatever regions their infrastructure spans, which can conflict with sector-specific or national data residency expectations. SpeakEZ's shared network is a single, defined deployment rather than a sprawling global cloud, and On-Prem removes the question entirely: your organization's node is wherever your organization puts it.",
  },
  {
    id: "retention",
    title: "Message retention after deletion",
    risk: "\"Deleted\" messages on many platforms persist in backups, replication logs, or moderation archives long after a user assumes they're gone.",
    eliminated: "SpeakEZ auto-deletes messages from the device shortly after they're read, and never stores plaintext content server-side to begin with.",
    detail:
      "Deleting a message in a client app usually only removes it from that client's view, while hosted platforms commonly retain copies elsewhere for periods they define. SpeakEZ's relay, whether shared or On-Prem, only ever sees encrypted ciphertext in transit — it isn't designed to retain a durable plaintext archive at all, and the app auto-deletes received messages from the device itself shortly after they're read.",
  },
  {
    id: "ad-tech",
    title: "Ad-tech & data broker resale",
    risk: "Contact graphs, device identifiers, and usage patterns collected by \"free\" messaging apps regularly get sold on to data brokers and advertisers.",
    eliminated: "There's no advertising business model here to fund, on our shared network or an On-Prem node — nothing about your usage is for sale.",
    detail:
      "Some free consumer messaging apps fund themselves in part by monetizing collected data — contact graphs, device and location signals, behavioral patterns — sold onward to data brokers and advertising networks. SpeakEZ's revenue comes from access to the service and On-Prem deployments, not from monetizing what you say or who you say it to.",
  },
];
