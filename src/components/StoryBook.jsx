import { useState } from "react";

// const pages = [
//   "📖 Chapter 1: The Unexpected 'Hi'\n\n8 May 2026. What was supposed to be a normal arranged marriage call started with a simple 'Hi, kaise ho?' from you. I don't know why, but that 'Hi' felt unusually comfortable, as if we had skipped the awkward stranger phase and jumped straight into being friends. Little did I know that one day I'd be waiting for your messages like they're breaking news updates.",

//   "😂 Chapter 2: The Great Cooking Controversy\n\nLike every responsible future husband, I asked, 'Teko khana banana aata hai?' And like every responsible future wife, you immediately suspected I was planning your lifetime kitchen duties. 😭 You replied, 'Bas khane layak bana leti hu.' The offense in your voice was legendary. Then I had to defend myself and clarify, 'Arre bhai, meko bhi aata hai!' Thankfully, our relationship survived the Great Cooking Scandal of 2026.",

//   "☎️ Chapter 3: Daily Subscription Activated\n\nSomewhere between those first conversations, talking to you became part of my daily routine. Morning updates, random thoughts, office gossip, food reports, family stories, travel stories, and sometimes absolutely useless information that somehow became the most interesting thing in my day. My phone wasn't a phone anymore—it became a direct connection to my favorite person.",

//   "🍻 Chapter 4: Party Tales & Family Secrets\n\nYou told me about your funny party moments, your adventures, the places you've visited, and the stories that still make you laugh. You told me about your family too—who you're closest to, who annoys you, who makes you laugh, and who deserves a permanent spot on the complaint list. Every story felt like another page of your world opening up for me.",

//   "😤❤️ Chapter 5: The Ego Investigation Department\n\nThere were days when you looked at me and thought, 'Is bande me kitna ego hai.' Meanwhile, I was standing there presenting evidence, witnesses, and supporting documents proving otherwise. After multiple hearings and several rounds of discussion, the court finally reached a verdict: 'The accused is annoying sometimes, but not actually egoistic.' Justice was served.",

// "🙄 Chapter 6: Professional Teaser\n\nYou have a special talent. A gift, really. You know exactly how to tease me until I'm completely frustrated. And the worst part? You enjoy it. Sometimes I genuinely think your favorite hobby is watching me suffer while you're laughing on the other side of the phone. Yet somehow, every time you tease me, I end up laughing too.",

//   "🧸 Chapter 7: My Favorite Version of You\n\nYou can be mature, responsible, independent, and professional. But my favorite version of you is when you become a complete baccha with me. The tiny complaints, the cute arguments, the dramatic reactions, the random mood swings, and the way you expect me to understand everything. Honestly, I wouldn't change a single thing.",

//   "⚔️ Chapter 8: DEV vs RAKSHAS\n\nEvery great love story has heroes and villains. Ours has DEV and RAKSHAS. There will be dramatic fights, unnecessary arguments, emotional speeches, peace treaties, surprise plot twists, and eventually one person saying, 'Theek hai baba, tum hi sahi ho.' (Usually after a very intense negotiation process.)",

//   "❤️ Chapter 9: To Be Continued...\n\nIt's only been a month, but somehow you've become part of my everyday happiness. The calls, the laughter, the arguments, the stories, the understanding, the effort, and the comfort of having you in my life. This website isn't a story about our first month.\n\nIt's just the first few pages of a very long, very beautiful book that I can't wait to write with you."
// ];

const pages = [
  "📖 Chapter 1: The Unexpected 'Hi'\n\n8 May 2026. What was supposed to be a normal arranged marriage call started with a simple 'Hi, kaise ho?' from you. I don't know why, but that 'Hi' felt unusually comfortable, as if we had skipped the awkward stranger phase and jumped straight into being friends. Little did I know that one day I'd be waiting for your messages like they're breaking news updates.",

  "😂 Chapter 2: The Great Cooking Controversy\n\nLike every responsible future husband, I asked, 'Teko khana banana aata hai?' And like every responsible future wife, you immediately suspected I was planning your lifetime kitchen duties. 😭 You replied, 'Bas khane layak bana leti hu.' The offense in your voice was legendary. Then I had to defend myself and clarify, 'Arre bhai, meko bhi aata hai!' Thankfully, our relationship survived the Great Cooking Scandal of 2026.",

  "☎️ Chapter 3: Daily Subscription Activated\n\nSomewhere between those first conversations, talking to you became part of my daily routine. Morning updates, random thoughts, office gossip, food reports, family stories, travel stories, and sometimes absolutely useless information that somehow became the most interesting thing in my day. My phone wasn't a phone anymore—it became a direct connection to my favorite person.",

  "🍻 Chapter 4: Party Tales & Family Secrets\n\nYou told me about your funny party moments, your travel adventures, the places you've visited, and the stories that still make you laugh. You told me about your family too—who you're closest to, who annoys you, who makes you laugh, and who deserves a permanent spot on the complaint list. Every story felt like another page of your world opening up for me.",

  "😤❤️ Chapter 5: The Ego Investigation Department\n\nThere were days when you looked at me and thought, 'Is bande me kitna ego hai.' Meanwhile, I was standing there presenting evidence, witnesses, supporting documents, and a full PowerPoint presentation proving otherwise. Before I could even finish my defense, Madam had already kept the phone aside. 😭 And there I was saying, 'Arre baat to karo, ego me nahi bola hu, let me clarify!' Thankfully, after several hearings and appeals, the court finally ruled in my favor. One month later, you discovered that I wasn't egoistic after all. Justice was served.",

  "🙄😂 Chapter 6: The Art of Troubling Me\n\nYou have a very special talent. You know exactly how to tease me until I become completely frustrated. Sometimes I genuinely believe your favorite hobby is disturbing my peace. You tease me, enjoy my reaction, laugh at my suffering, and then somehow convince me that I'M the dramatic one. The worst part? I secretly love every second of it.",

  "🧸 Chapter 7: My Favorite Version of You\n\nYou can be mature, responsible, independent, and professional. But my favorite version of you is when you become a complete baccha with me. The cute complaints, the random drama, the tiny arguments, the innocent questions, and the way you expect me to understand everything without saying much. Honestly, I wouldn't change a single thing about it.",

  "✨ Chapter 8: Same Vibes, Same Energy\n\nOne thing you always tell me is that you enjoy my company. You say our vibes match. You say I'm a cool person to talk to. Every time you say that, I try to act normal, but inside I'm smiling like an idiot. Because the truth is, talking to you is one of the easiest and happiest parts of my day. Hours pass like minutes, and somehow we never run out of things to talk about.",

  "⚔️ Chapter 9: DEV vs RAKSHAS\n\nEvery great love story has heroes and villains. Ours has DEV and RAKSHAS. There will be dramatic fights, unnecessary arguments, emotional speeches, peace treaties, surprise plot twists, and eventually one person saying, 'Theek hai baba, tum hi sahi ho.' (Usually after a very intense negotiation process.)",

  "❤️ Chapter 10: To Be Continued...\n\nIt's only been a month, but somehow you've become part of my everyday happiness. The calls, the laughter, the teasing, the arguments, the clarifications, the stories, the understanding, the comfort, and the way you make ordinary days feel special.\n\nYou once said you enjoy my company. The truth is, I enjoy yours even more.\n\nThis website isn't a story about our first month.\n\nIt's just the first few pages of a very long, very beautiful book that I can't wait to write with you. ❤️"
];

export default function StoryBook() {
	const [i, setI] = useState(0);

	return (
		<section className="section">
			<div className="container card text-center">
				<h3 className="title">Our Story</h3>

				<p style={{ minHeight: "4rem" }}>{pages[i]}</p>

				<div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
					<button className="btn" onClick={() => setI((s) => Math.max(0, s - 1))} disabled={i === 0}>
						Prev
					</button>

					<button className="btn btn-primary" onClick={() => setI((s) => Math.min(pages.length - 1, s + 1))} disabled={i === pages.length - 1}>
						Next
					</button>
				</div>
			</div>
		</section>
	);
}
