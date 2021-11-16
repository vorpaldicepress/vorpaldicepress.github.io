---
  title: The Chosen, Playtest and Update
---

<style>
main a {
	color:	#4f115f;
	text-decoration:	none;
	font-style:	italic;
	font-weight:	bold;
}
main .feature {
	text-indent: 15px;
}
main .hanging {
	text-indent: -15px;
	margin-left: 15px;
}
main table {
	border-spacing:	5px;
}
main h2 {
	margin-bottom:	2px;
}
main h3 {
	margin-bottom:	2px;
}
main h4 {
	margin-bottom:	2px;
}
main .spelllist {
	margin-left:	15px;
}
main .editor {
	width: 75%;
	margin-left:	15px;
	margin-right:	15px;
	padding-left:	10px;
	padding-right:	10px;
	padding-top:	1px;
	padding-bottom:	5px;
	background-color:	rgba(128, 187, 59, 0.25);
}
</style>

Back in May of this year, I published a playtest document for a new class for Dungeons & Dragons 5th Edition called the [Chosen](https://drive.google.com/file/d/1pO3tAy_skzuVHAeWIrs1DrGB7RDTBSRP/view). This was my answer to the Sorcerer, which I feel is one of the least satisfying (both in a mechanical and thematic sense) class in 5e.

Yeah, that's right. Cue shock and awe.

It's maybe not a common opinion, but it's a strong one among those who hold it.

Why am I posting about this now? Because I am revisiting the Chosen playtest and wrapping it up, ready for publication!

Here are my issues with the Sorcerer:

### 1st-level Subclasses

This should probably come later in my issues, but it's an important one. The Sorcerer has 1st-level subclasses because it **must**. The theme of a Sorcerer requires 1st-level subclasses because your magic is intrinsic to who you are.

If the idea was the power was *emergent*, it would make a better Wizard subclass.

The reason this is an issue is because of how the Sorcerer's class specific features are structured, namely Sorcery Points and the two main features that interact with SP: Font of Magic and Metamagic.

These features appear at 2nd- and 3rd-level respectively, which means the 1st-level subclass feature can't interact with them. The first opportunity for a subclass to interact with the Sorcerer's main class features is 6th level, much too late in my opinion and an awkward level for a full caster as there isn't a ton of room for a big and interesting feature here.

### Sorcery Points and Font of Magic

Font of Magic is, in my opinion, the best feature that a Sorcerer has for class identity. And Wizards of the Coast knew it, because they started experimenting with expanding it in the original [Class Feature Variants](https://media.wizards.com/2019/dnd/downloads/UA-ClassFeatures.pdf) Unearthed Arcana.

These right here:

<img src="/img/blog/font_of_magic.png" />

This *feels* sorcerous and is unique to the Sorcerer. Much more interesting than what the Sorcerer typically gets with Font of Magic.

The reason it's such a shame that the 1st-level subclass feature can't interact with Font of Magic is, can you imagine subclass specific options here? You don't have to, here are two quick ideas I whipped up:

#### Draconic Might
As a bonus action, you can transmute one of your hands into a dragon's claw for 1 minute. This claw can be used to make unarmed attacks, which use your Charisma modifier instead of your Strength modifier for the attack and damage rolls and deal 1d10 slashing damage. This attack is magical for the purposes of overcoming resistance to nonmagical damage.

#### Surge of Chaos
As a bonus action, you can spend 1 sorcery point to roll on the Wild Magic Surge table. When you do, you regain the use of your Tides of Chaos feature if it was previously expended.

### Metamagic

Similar to Font of Magic, by being 3rd level the Sorcerer misses out on having subclass-specific Metamagic options. You are a Dragon Sorcerer, not a Sorcerer who happens to also have Dragon Blood. Why are you casting <a href="https://www.dndbeyond.com/spells/burning-hands/">burning hands</a> when you could be breathing fire? Subclass specific Metamagic Options would have been a great place to handle this.

### Are You Really a Dragon?

This one is a bit of a bigger issue with identity, and goes back to what I just said:

> You are a Dragon Sorcerer, not a Sorcerer who happens to also have Dragon Blood.

This is a problem with Sorcerer identity in 5e: Wizards didn't seem to want to commit to the idea that you were a **mutant**.

The most interesting Sorcerer subclasses are the ones that lean really hard into the idea of emerging throughout the levels into your bloodline or origin, eventually becoming that.

In fact, the Wild Magic sorcerer actually gets *less* wild as they level. They gain control over the chaos instead of embracing it. That sounds like something a Wizard would do, at least to me.

### Lastly, just a Wizard Without a Book

The other big issue with Sorcerer for me is just it's identity alongside its counterpart: the Wizard.

A Sorcerer is a Spells Known caster, which could have been an opportunity to build on the idea of "Why cast <a href="https://www.dndbeyond.com/spells/delayed-blast-fireball/">delayed blast fireball</a> when I could just cast a bigger <a href="https://www.dndbeyond.com/spells/fireball/">fireball</a>?" but instead comes off as "I'm not studious enough to learn more magic."

The problem here is the emphasis on *I'm not a Wizard, so I'm a Sorcerer* as opposed to *I am a Sorcerer, and here's what sets me apart from a Wizard*.

## The Chosen

So, the Chosen sets out to address these issues. The last page of the [playtest pdf](https://drive.google.com/file/d/1pO3tAy_skzuVHAeWIrs1DrGB7RDTBSRP/view) includes the design notes, but I'll repeat them here:

I will begin by prefacing that this document represents a class that is designed with the intent of being a direct replacement for the Sorcerer class in 5th edition.
The Sorcerer class, in my opinion, does not fully realize itself as a “creat[or of] magic the way a poet creates poems, with inborn talent honed by practice.” (*Player’s Handbook 3.5e*).

Moreover, a sorcerer’s origin has little impact on how or what kind of magic they can produce. It seems to be more of a personal—and, often times physical—influence over who they are and not the nature of their magic.

One of the primary design goals here was to capture the essence of a spellcaster who gains more control over spells inherited from their power source as they cast them more frequently, as opposed to simply growing into learning new spells as they gain levels. To that end:

### Chosen Casting

I’ve chosen (heh) to use the Warlock class casting as a base for the Chosen. Looking at the class table, that might not be self evident, so let’s break that down. We have three distinct paths of spellcasting here, and cantrips for funsies.

**Spontaneous Magic:** A chosen’s magic is spontaneous. It doesn’t come from a book, or object of power, it literally erupts from the chosen themself at their will. Spontaneous Magic is difficult to control, so it’s a more limited resource (twice per Long Rest) and spells cast are always cast at their highest level.

How does that translate to gaining more control? Say you take <a href="https://www.dndbeyond.com/spells/burning-hands/">burning hands</a> at 1st level. You can only cast it twice per long rest as a 1st-level spell until you gain the Adept Casting feature.

**Adept Casting:** You’ve now unlocked the ability to cast <a href="https://www.dndbeyond.com/spells/burning-hands/">burning hands</a> as a 2nd-level spell twice per long rest as Spontaneous Magic. But you’ve also gained mastery over the spell. You can also cast it twice per short rest, but only as a 1st-level spell.

This continues still until you reach 6th level as a Chosen, and gain the Innate Spell Mastery feature.

**Innate Spell Mastery:** By 6th level, you can now cast <a href="https://www.dndbeyond.com/spells/burning-hands/">burning hands</a> as a 3rd-level spell twice per long rest; and a 2nd-level spell twice per short rest.

And you can also cast it at will as a 1st-level spell. It’s become second nature to you. You conjure that wave of flame like as easily as a barbarian swings their axe.

These three paths of spellcasting are not unlike a Warlock’s Eldritch Blast and Eldritch Invocations, Pact Magic, and Mystic Arcanum. However, the progression of growth rather than suddenly gaining new abilities is meant to highlight the Chosen’s increasing talents.

I’ve also chosen to limit a Chosen to 7th-level spells, to build on the idea that there is a difference between what a trained spell master (a Wizard) or a Deity-fueled caster (a Cleric) can accomplish. This is part of a larger reimagining of the place of high level magic in a world, but I feel it fits thematically well on the Chosen even in a traditional Dungeons & Dragons world.

### Hidden Talent

Similar to a Warlock’s pact, the chosen’s Hidden Talent is an additional layer to their inherited power. It’s an ability they unlock as they develop their powers, and is uniquely theirs. 

### Origin

In this draft, we’re showing the Draconic Blood origin. This might not be the best example of how this class differs from the Sorcerer, but it does reinforce my intentions of having the Chosen as a replacement for it.

A focus of the Origin here, through the use of Origin spells and ways to expend uses of your Spontaneous and Adept casting features, is to reinforce that you have a form of magic unique to your Origin.

Three additional subclasses are planned to the final draft:

- the Raw Magic chosen that will be reminiscent of the Wild Magic sorcerer
- the Wild Talent chosen, a spontaneous inheritor of the art of Psionics
- and the Fated chosen, a chosen whose takes their fated destiny into their own hands