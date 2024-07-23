const story = document.getElementById('story');
const choice1Button = document.getElementById('choice1');
const choice2Button = document.getElementById('choice2');

let currentScene = 0;

const scenes = [
    {
        text: "1945. Auschwitz. The weight of unspeakable horror surrounds you. Amidst the daily struggle for survival, whispers of liberation circulate. But waiting could mean death. You must decide your next move carefully.",
        choice1: "Seek out trusted fellow prisoners for more information",
        choice2: "Begin planning an escape attempt immediately",
        next1: 1,
        next2: 2
    },
    {
        text: "You discreetly approach a small group of prisoners you've come to trust. They share grim news: mass evacuations are imminent as Soviet forces approach. The SS plans to move prisoners westward - many may not survive the journey.",
        choice1: "Propose a collective escape attempt during the chaos of evacuation",
        choice2: "Suggest hiding within the camp until liberation arrives",
        next1: 3,
        next2: 4
    },
    {
        text: "Under cover of night, you begin to scout the perimeter, searching for weaknesses. The searchlights sweep across the frozen ground, a constant reminder of the danger. You notice a section of fence that appears less guarded.",
        choice1: "Attempt to create a distraction to draw guards away",
        choice2: "Wait for an opportunity when guard patrols are changing shifts",
        next1: 5,
        next2: 6
    },
    {
        text: "As the evacuation begins, chaos erupts. Prisoners are being herded towards the gates. In the confusion, your group sees a chance to slip away unnoticed. But the risk of being shot is high.",
        choice1: "Take the risk and attempt to break away from the crowd",
        choice2: "Stay with the main group, hoping for a safer opportunity later",
        next1: 7,
        next2: 8
    },
    {
        text: "Your group finds a hiding place in an abandoned barracks. Days pass in tense silence. You hear distant gunfire and explosions. Food and water are scarce, and the cold is brutal.",
        choice1: "Risk leaving the hiding place to search for supplies",
        choice2: "Remain hidden and conserve energy, hoping liberation comes soon",
        next1: 9,
        next2: 10
    },
    {
        text: "You manage to start a small fire in a distant corner of the camp. As guards rush to investigate, you make your move towards the fence. Halfway there, you hear shouts behind you.",
        choice1: "Keep running and hope to reach the fence before being spotted",
        choice2: "Drop to the ground and pray the darkness conceals you",
        next1: 11,
        next2: 12
    },
    {
        text: "As the guard shift changes, you seize your moment. Heart pounding, you dash towards the fence. You begin to climb, the barbed wire tearing at your hands and clothes. Suddenly, alarms blare across the camp.",
        choice1: "Ignore the pain and keep climbing",
        choice2: "Abandon the attempt and try to blend back in with other prisoners",
        next1: 13,
        next2: 14
    },
    {
        text: "In a moment of chaos, your group breaks from the crowd. Gunshots ring out, but in the confusion, it's unclear if they're aimed at you. You run towards the cover of nearby woods.",
        choice1: "Keep running, no matter what",
        choice2: "Split up to improve chances of at least some escaping",
        next1: 15,
        next2: 16
    },
    {
        text: "The march is grueling. Many collapse from exhaustion or are shot. You help a fellow prisoner who's struggling. Ahead, you see a bend in the road near a forested area.",
        choice1: "Attempt to slip away into the forest with your companion",
        choice2: "Continue the march, hoping for a better opportunity",
        next1: 17,
        next2: 18
    },
    {
        text: "Desperate for food, you venture out. The camp seems eerily quiet. You find some abandoned rations but hear approaching footsteps as you're about to return to hiding.",
        choice1: "Quickly grab the food and rush back to hiding",
        choice2: "Leave the food and find an alternate hiding spot",
        next1: 19,
        next2: 20
    },
    {
        text: "Days pass in agonizing silence. Some in your group fall ill. Then, one morning, you hear unfamiliar voices and the sound of tanks. Could it be liberation, or a trick?",
        choice1: "Cautiously reveal yourselves",
        choice2: "Remain hidden until you're certain it's safe",
        next1: 21,
        next2: 22
    },
    // More scenes would continue here...
	// ... (previous scenes remain the same)

    {
        text: "You make it over the fence, your hands bleeding. The alarm continues to blare. You run towards the nearby forest, your lungs burning in the cold air.",
        choice1: "Keep running deeper into the forest",
        choice2: "Find a hiding spot near the edge of the forest",
        next1: 23,
        next2: 24
    },
    {
        text: "As you try to blend back in, a guard spots you. He approaches, suspicious of your torn clothes and bleeding hands.",
        choice1: "Attempt to explain your presence with a lie",
        choice2: "Surrender and hope for mercy",
        next1: 25,
        next2: 26
    },
    {
        text: "Your group races towards the woods. Gunshots echo behind you, but adrenaline pushes you forward. You reach the treeline, gasping for breath.",
        choice1: "Press on deeper into the forest",
        choice2: "Find a hiding spot to catch your breath and plan",
        next1: 27,
        next2: 28
    },
    {
        text: "As the group splits up, chaos ensues. You lose sight of your companions. The sound of dogs barking grows closer.",
        choice1: "Climb a tree to avoid the dogs and wait it out",
        choice2: "Keep moving, trying to put distance between you and the pursuit",
        next1: 29,
        next2: 30
    },
    {
        text: "You and your companion slip into the forest unnoticed. The sounds of the march fade, replaced by the eerie quiet of the woods.",
        choice1: "Move deeper into the forest, away from any paths",
        choice2: "Follow the edge of the forest, parallel to the road",
        next1: 31,
        next2: 32
    },
    {
        text: "The march continues. Your feet are numb, your body aching. Ahead, you see a small bridge over a half-frozen river.",
        choice1: "Attempt to jump into the river and swim to freedom",
        choice2: "Continue marching, conserving energy for a later escape attempt",
        next1: 33,
        next2: 34
    },
    {
        text: "You grab the food and rush back. As you enter your hiding spot, you hear voices outside. Everyone holds their breath.",
        choice1: "Remain absolutely still and silent",
        choice2: "Prepare to fight if discovered",
        next1: 35,
        next2: 36
    },
    {
        text: "You find a new hiding spot, heart pounding. Hours pass. The camp falls silent, an eerie calm descending.",
        choice1: "Use the silence as an opportunity to search for your group",
        choice2: "Stay hidden, waiting for a clearer sign of what's happening",
        next1: 37,
        next2: 38
    },
    {
        text: "You cautiously emerge. Soviet soldiers look shocked at your appearance. One approaches, offering a blanket.",
        choice1: "Accept help and share information about other hidden prisoners",
        choice2: "Ask about the fate of the camp and the war",
        next1: 39,
        next2: 40
    },
    {
        text: "You remain hidden as voices and movements continue outside. Hours pass. Suddenly, the door opens.",
        choice1: "Reveal yourselves, hoping it's liberators",
        choice2: "Stay hidden, fearing it might be a trick",
        next1: 41,
        next2: 42
    },
    // Endings start here
    {
        text: "You've run for what feels like hours. Exhausted, you collapse in a small clearing. As dawn breaks, you realize you're truly free, but the journey ahead is uncertain and perilous.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "In your hiding spot, you hear the sounds of battle. Days pass. Finally, Soviet soldiers find you. You're free, but the trauma of your experience weighs heavily.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "The guard doesn't believe your lie. You're taken for punishment. Though you survive, the opportunity for escape has passed. Liberation comes weeks later.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "Your surrender is met with brutal treatment. You survive, barely, until liberation comes. The scars, both physical and mental, will never fully heal.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    // More endings would continue here...
	
	// ... (previous scenes and endings remain the same)

    {
        text: "From your perch in the tree, you watch as search parties pass below. Hours pass, and the forest grows quiet. You're safe for now, but hungry and cold.",
        choice1: "Climb down and try to find food and water",
        choice2: "Stay in the tree until nightfall for extra safety",
        next1: 43,
        next2: 44
    },
    {
        text: "You keep moving through the night, guided only by stars. Dawn breaks, revealing a small village in the distance.",
        choice1: "Approach the village cautiously, seeking help",
        choice2: "Avoid the village and continue through the wilderness",
        next1: 45,
        next2: 46
    },
    {
        text: "Deep in the forest, you find a small, abandoned hunting cabin. It offers shelter, but staying could be risky.",
        choice1: "Use the cabin to rest and recover",
        choice2: "Keep moving, fearing the cabin might be checked",
        next1: 47,
        next2: 48
    },
    {
        text: "Following the forest edge, you come across a road. A military truck approaches in the distance.",
        choice1: "Hide and let the truck pass",
        choice2: "Try to determine if it's Allied forces and potentially signal for help",
        next1: 49,
        next2: 50
    },
    {
        text: "You plunge into the icy river. The current is strong, pulling you downstream. The cold seeps into your bones.",
        choice1: "Fight the current, trying to swim to the far bank",
        choice2: "Let the current carry you, conserving energy",
        next1: 51,
        next2: 52
    },
    {
        text: "The march continues. Days blur together. Many collapse around you. You hear rumors of approaching Allied forces.",
        choice1: "Try to stay strong and wait for liberation",
        choice2: "Plan a final, desperate escape attempt",
        next1: 53,
        next2: 54
    },
    {
        text: "The voices pass. In the silence that follows, you share the meager rations. The group debates what to do next.",
        choice1: "Suggest leaving to find help or information",
        choice2: "Advocate for staying hidden longer",
        next1: 55,
        next2: 56
    },
    {
        text: "In your new hiding spot, you overhear SS officers discussing evacuation plans. The camp is to be abandoned soon.",
        choice1: "Use this information to plan an escape during the evacuation",
        choice2: "Stay hidden and wait for the camp to be fully abandoned",
        next1: 57,
        next2: 58
    },
    {
        text: "You share information about other prisoners. The Soviet soldiers organize search parties. More survivors are found.",
        choice1: "Offer to help with rescue efforts despite your exhaustion",
        choice2: "Accept medical attention and rest",
        next1: 59,
        next2: 60
    },
    {
        text: "The soldiers explain that the war is nearing its end. Nazi forces are retreating on all fronts. Liberation is spreading.",
        choice1: "Ask about the fate of your family and home",
        choice2: "Inquire about what will happen to the camp and its survivors",
        next1: 61,
        next2: 62
    },
    // More endings
    {
        text: "You reveal yourselves. To your relief, it's Soviet liberators. The nightmare of Auschwitz is over, but the journey of healing has just begun.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "Your caution saves you. The intruders are retreating SS officers destroying evidence. Hours later, real liberators arrive.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "Climbing down, you find berries and a stream. The small meal renews your strength, but you're spotted by local police collaborating with Nazi forces.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "Night falls. As you descend, you encounter a group of partisans. They take you in, offering a chance to fight back.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "A kind villager shelters you in their cellar. Weeks later, Soviet forces liberate the area. Your survival seems miraculous.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "The wilderness is harsh. After days of wandering, starving and delirious, you're found by advancing Allied soldiers.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    // More endings would continue...
	
	// ... (previous scenes and endings remain the same)

    {
        text: "In the cabin, you find some old preserves and a map. As you rest, you hear vehicles on a distant road.",
        choice1: "Leave immediately, using the map to navigate",
        choice2: "Wait until nightfall to continue your journey",
        next1: 63,
        next2: 64
    },
    {
        text: "Your journey through the wilderness is arduous. After days of travel, you encounter a group of refugees fleeing the war.",
        choice1: "Join the refugee group for safety in numbers",
        choice2: "Continue on your own to avoid drawing attention",
        next1: 65,
        next2: 66
    },
    {
        text: "The truck passes without incident. As night falls, you see the glow of a town in the distance.",
        choice1: "Head towards the town to seek help",
        choice2: "Avoid the town and continue through the countryside",
        next1: 67,
        next2: 68
    },
    {
        text: "You wave at the truck, which stops. To your relief, it's filled with American soldiers on a reconnaissance mission.",
        choice1: "Go with the soldiers to their base",
        choice2: "Ask them for supplies and continue on your own",
        next1: 69,
        next2: 70
    },
    {
        text: "You reach the far bank, thoroughly chilled but alive. In the distance, you hear dogs barking.",
        choice1: "Find a hiding spot near the river",
        choice2: "Push on despite your exhaustion",
        next1: 71,
        next2: 72
    },
    {
        text: "The current carries you far downstream. You manage to grab onto a fallen tree and pull yourself to shore.",
        choice1: "Follow the river, hoping it leads to a town",
        choice2: "Head inland, away from potential pursuers",
        next1: 73,
        next2: 74
    },
    {
        text: "Allied planes fly overhead. The guards look nervous. Suddenly, there's shouting and confusion in the column.",
        choice1: "Use the chaos to attempt an escape",
        choice2: "Stay in the column, hoping for imminent liberation",
        next1: 75,
        next2: 76
    },
    {
        text: "Your escape attempt catches the guards off-guard. In the ensuing chaos, you and a few others break away.",
        choice1: "Run for the nearest cover",
        choice2: "Try to disarm a guard in the confusion",
        next1: 77,
        next2: 78
    },
    {
        text: "You leave to find help. In a clearing, you encounter a group of escaped Soviet POWs.",
        choice1: "Join forces with the Soviet POWs",
        choice2: "Exchange information but continue on your own",
        next1: 79,
        next2: 80
    },
    {
        text: "Staying hidden proves wise. You hear patrols pass by. After two days, the camp falls silent.",
        choice1: "Venture out to investigate the silence",
        choice2: "Wait one more day to be certain",
        next1: 81,
        next2: 82
    },
    // More endings
    {
        text: "Using the map, you navigate through back roads. After a tense journey, you reach Allied lines. Your escape is successful, but the memories of Auschwitz will never fade.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "Waiting proves fatal. Nazi forces searching for escapees find the cabin. You're recaptured and sent to another camp. Liberation comes months later, but at a heavy cost.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "The refugee group welcomes you. Together, you navigate through war-torn lands. Months later, you reach safety, carrying with you the stories of those who didn't survive.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "Alone, you evade detection but face extreme hardship. Weeks later, starving and ill, you're found by aid workers. Your solitary journey ends, but recovery will take years.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "In the town, you find a resistance network. They provide you with false papers and a route to safety. Your escape succeeds, and you join the fight against Nazi oppression.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "Avoiding populated areas, you wander for weeks. Eventually, you connect with partisan fighters. Though free from Auschwitz, the war's end is still a distant hope.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    // More endings would continue...
	
	// ... (previous scenes and endings remain the same)

    {
        text: "The American soldiers take you to their base. You're debriefed and given medical attention. The war's end seems near, but your thoughts are with those left behind.",
        choice1: "Offer to help the Allies with your knowledge of the camps",
        choice2: "Focus on recovering and contacting any surviving family",
        next1: 83,
        next2: 84
    },
    {
        text: "With supplies from the soldiers, you continue your journey. You encounter a destroyed village and hear distant artillery.",
        choice1: "Investigate the village for survivors or useful items",
        choice2: "Avoid the area and continue moving away from the front lines",
        next1: 85,
        next2: 86
    },
    {
        text: "In your riverside hiding spot, you overhear German soldiers discussing retreat plans. They seem unaware of your presence.",
        choice1: "Remain hidden and gather more information",
        choice2: "Attempt to steal supplies while they're distracted",
        next1: 87,
        next2: 88
    },
    {
        text: "Despite exhaustion, you press on. You stumble upon an abandoned farm. There's food, but staying could be dangerous.",
        choice1: "Rest at the farm and regain your strength",
        choice2: "Take some food and continue moving",
        next1: 89,
        next2: 90
    },
    {
        text: "Following the river, you reach a small town. It seems to be under German control, but there's significant partisan activity.",
        choice1: "Seek out the partisans for help",
        choice2: "Try to pass through the town unnoticed",
        next1: 91,
        next2: 92
    },
    {
        text: "Heading inland, you find yourself in dense, unfamiliar forest. You hear planes overhead and explosions in the distance.",
        choice1: "Climb a tree to get your bearings and assess the situation",
        choice2: "Keep moving, following the sound of distant fighting",
        next1: 93,
        next2: 94
    },
    {
        text: "In the chaos of the Allied air attack, guards are distracted. You see a chance to slip away into nearby woods.",
        choice1: "Take the risk and make a run for it",
        choice2: "Stay put, hoping the Allies will soon reach you",
        next1: 95,
        next2: 96
    },
    {
        text: "You manage to disarm a guard in the confusion. Now armed, you face a critical decision.",
        choice1: "Use the weapon to fight your way to freedom",
        choice2: "Use the threat of the weapon to negotiate safe passage for you and others",
        next1: 97,
        next2: 98
    },
    {
        text: "You join the Soviet POWs. They have a plan to sabotage a nearby Nazi supply line.",
        choice1: "Participate in the sabotage mission",
        choice2: "Suggest finding a safer route away from enemy activity",
        next1: 99,
        next2: 100
    },
    {
        text: "Venturing out, you find the camp abandoned. Eerie silence hangs over the empty barracks. In the distance, you hear approaching vehicles.",
        choice1: "Hide and observe who's arriving",
        choice2: "Openly approach, hoping they're liberators",
        next1: 101,
        next2: 102
    },
    // More endings
    {
        text: "Your knowledge proves invaluable to the Allies. You help liberate other camps, facing the horrors again but as a rescuer. The war ends, leaving you with a complex legacy of survival and heroism.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "You focus on recovery and eventually reunite with a surviving cousin. Together, you begin the painful process of rebuilding your lives, carrying the weight of your experiences and the memory of those lost.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "In the village, you find a young girl hiding in a cellar. You decide to protect her, complicating your escape but reaffirming your humanity. Months later, you both reach safety.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "Avoiding the village saves you from a Nazi patrol. After a grueling journey, you reach Soviet lines. The war's end finds you working to document the atrocities you witnessed.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "The information you gather proves crucial. You pass it to advancing Allied forces, contributing to the Nazi defeat. Your actions save lives, but the memories of Auschwitz never fade.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "Your attempt to steal supplies alerts the soldiers. In the ensuing chase, you're wounded but manage to escape. Weeks later, you're found by liberating forces, forever marked by your ordeal.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    // More endings would continue...
	// ... (previous scenes and endings remain the same)

    {
        text: "Resting at the farm restores your strength, but Nazi patrols discover you. In a desperate fight, you manage to escape, but are wounded.",
        choice1: "Seek medical help at great risk",
        choice2: "Try to treat the wound yourself and keep moving",
        next1: 103,
        next2: 104
    },
    {
        text: "The partisans welcome you, but their hideout is attacked shortly after. In the chaos of battle, you must make a quick decision.",
        choice1: "Stay and fight alongside the partisans",
        choice2: "Use the confusion to slip away alone",
        next1: 105,
        next2: 106
    },
    {
        text: "From your vantage point in the tree, you see Soviet forces approaching. German troops are retreating in disarray.",
        choice1: "Try to reach the Soviet lines immediately",
        choice2: "Wait for the area to clear before moving",
        next1: 107,
        next2: 108
    },
    {
        text: "Your escape into the woods is successful, but you're deep in enemy territory. You come across other escaped prisoners.",
        choice1: "Join the group, finding strength in numbers",
        choice2: "Share information but continue alone for stealth",
        next1: 109,
        next2: 110
    },
    {
        text: "Using the weapon, you secure escape for a small group. As you flee, you debate whether to keep the gun.",
        choice1: "Keep the weapon for protection",
        choice2: "Discard it to avoid being seen as a combatant",
        next1: 111,
        next2: 112
    },
    {
        text: "The sabotage mission is successful, but draws heavy Nazi attention. Your group is now hunted.",
        choice1: "Stay with the POWs and continue resisting",
        choice2: "Part ways and try to reach Allied lines alone",
        next1: 113,
        next2: 114
    },
    {
        text: "Hiding, you observe American forces entering the camp. They're shocked by what they find.",
        choice1: "Reveal yourself immediately to the Americans",
        choice2: "Wait until you're certain it's safe before approaching",
        next1: 115,
        next2: 116
    },
    // Final set of endings to reach 64
    {
        text: "Seeking medical help, you're discovered by a German doctor who, moved by compassion, treats you secretly. This unexpected kindness complicates your view of humanity amidst the horrors you've witnessed.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "Treating the wound yourself, you develop a fever. Delirious, you're found by Polish resistance fighters who nurse you back to health. You join their ranks, fighting for liberation until the war's end.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "Fighting with the partisans, you play a crucial role in holding off the attack. Though many lives are lost, your actions save the majority of the group. You continue with them until liberation.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "Slipping away alone, you navigate through increasingly chaotic territory. Weeks later, you reach American lines, your solitary journey a testament to human resilience.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "Reaching Soviet lines, you're initially treated with suspicion but soon prove your identity. You assist in liberation efforts, confronting the full scale of the Holocaust's horror.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "Waiting proves wise as a firefight erupts. In the aftermath, you emerge to a war-torn landscape. You're eventually found by Allied medics, marking the end of your long ordeal.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "The group's journey is perilous, but together you overcome numerous obstacles. Upon reaching safety, you form lifelong bonds with your fellow survivors, united by your shared experience.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "Your solo journey is fraught with danger, but your caution pays off. You successfully evade capture and eventually link up with advancing Allied forces, providing valuable intelligence.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "Keeping the weapon saves your group during a chance encounter with SS stragglers. The experience leaves you conflicted about the nature of survival and morality in extreme circumstances.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "Discarding the weapon, you adopt a non-violent approach to your escape. This decision faces many tests, but ultimately leads to your rescue by a group of sympathetic civilians.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "Continuing with the POWs, you become part of a legendary resistance unit. Your actions help turn the tide in the region, though the cost in lives haunts you long after the war.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "On your own, you face numerous close calls but ultimately reach safety. Your detailed testimony becomes crucial in post-war trials, ensuring the truth of the Holocaust is not forgotten.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "Revealing yourself immediately, you become one of the first survivors to recount the horrors of Auschwitz to the liberators. Your testimony is instrumental in documenting the atrocities.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    },
    {
        text: "Waiting to approach pays off as you observe the full process of liberation. When you finally step forward, you're able to guide the Americans to hidden evidence and other survivors.",
        choice1: "End your journey here",
        choice2: "End your journey here",
        next1: -1,
        next2: -1
    }
	
	
	];

function displayScene(sceneIndex) {
    if (sceneIndex >= scenes.length) {
        endGame();
        return;
    }

    const scene = scenes[sceneIndex];
    story.textContent = scene.text;
    choice1Button.textContent = scene.choice1;
    choice2Button.textContent = scene.choice2;

    choice1Button.onclick = () => displayScene(scene.next1);
    choice2Button.onclick = () => displayScene(scene.next2);

    currentScene = sceneIndex;
}

function endGame() {
    story.textContent = "Your journey has come to an end. The full weight of the experience settles upon you. Whether in freedom or in memory, the struggle to bear witness to the unthinkable continues.";
    choice1Button.style.display = 'none';
    choice2Button.style.display = 'none';
}

displayScene(0);
	