/*
 * @Date: 2020-11-28 10:48:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-22 15:06:28
 * @FilePath: \my-node\docs\.vuepress\theme\helpers\home-text.js
 * @desc: Do not edit
 */

const arr = [
  // '你对人人都喜欢，也就是说，你对人人都漠然。',
  '哪怕是野火焚烧，哪怕是冰雪覆盖，依然是志向不改，依然是信念不衰。',
  '与岁月对望，所有人都老了，再没人死于心碎。',
  '一星陨落，黯淡不了星空灿烂；一花凋零，荒芜不了整个春天。',
  '心之所向，素履以往，生如逆旅，一苇以航。',
  // '时间赐我青春与死亡，尽管我戴着镣铐依然像大海一样歌唱。',
  // '生活安逸时会做出绝望的诗，生活窘迫时会不断写出生的喜悦。',
  // '一定要爱着点什么，它让我们变得坚韧、宽容、充盈。业余的，爱着。',
  // '一个能够升起月亮的身体，必然驮住了无数次日落。',
  // '凡事需多听但少言；聆听他人之意见，但保留自己之判断。',
  // '善的追随你，恶的倾慕你。光明的渴望你，黑暗的也希冀你。 你是超越一切的存在，是神为万物镀上的色彩。',
  // '死亡不是失去生命，而是走出了时间。',
  // '要是你老是认为自己配不上一个更好的人， 那么，你也永远无法成为一个更好甚至最好的自己。',
  // '生活总是让我们遍体鳞伤，但到后来，那些受伤的地方一定会变成我们最强壮的地方。',
  // '过放荡不羁的生活，容易得像顺水推舟，但是要结识良朋益友，却难如登天。',
  // '我们的灵魂，或者说我们的内在生命，常常是和我们的外在生活格格不入的。',
  '要是爱你爱的少些，话就可以说的多些了。',
  // '寂静在喧嚣里低头不语，沉默在黑夜里与目光结交。于是，我们看错了世界，却说世界欺骗了我们。',
  '​​​​爱的反面不是仇恨，而是漠不关心。',
  // '即使没有月亮 心中也是一片皎洁。',
  // '梦之中，尽是称心如意。乍惊，不知人间何世，天不再冷了，夜不再昏了，人也不再年少。一觉醒来，人间原来暗换了芳华。',
  // '屏弃于温暖之外，满足于荒凉的寂寞。有孤独，才能保持永远澄澈。',
  // '我们准备着深深地领受，那些意想不到的奇迹， 在漫长的岁月里忽然有，彗星的出现，狂风乍起。',
  '希望有一天，可以仅仅为了「我喜欢」这三个字去做事。',
  // '跟这个世界交手的许多年来，你是否，光彩依旧，兴趣盎然。',
  // '我从没被人说服过，所以也懒得去寻求别人的理解。人都是顽固不化和自以为是的，相安无事的唯一办法就是欺骗。',
  // '历史是只看结果而忽略手段的，就像人们只看到中国的万里长城、埃及的金字塔等许多伟大建筑，而看不到这些建筑下面的累累白骨。',
  // '人生最大的幸运，莫过于在他的人生中途即在他年富力强时发现自己的人生使命',
  '要永远年轻，永远热情，永远不听话；要大笑，要做梦，要与众不同。人生是一场伟大的冒险。',
  // '如果命运阻挡我的话,我就支配命运。',
  // '我们无法在时间的长河中垂钓，但我们可以将对苦难的诘问，化为觅渡的力量。',

  '书是我的奴隶，应该服从我的意志，供我使用。',
  // '我们一定要给自己提出这样的任务：第一，学习，第二是学习，第三还是学习。',
  '我所有的自负皆来自我的自卑，所有的英雄气概都来自于我的软弱。嘴里振振有词是因为心里满是怀疑，深情是因为痛恨自己无情。这世界没有一件事情是虚空而生的，站在光里，背后就会有阴影，这深夜里一片寂静，是因为你还没有听见声音。',
  // '这世界是如此喧哗，让沉默的人显得有点傻。',
  // '我去旅行，是因为我决定了要去，并不是因为对风景的兴趣。',
  // '大张旗鼓地离开，其实都是试探，真正的离开，是没有告别的，从来扯着嗓子喊着要走的人，都是最后自己把摔了一地的玻璃碎片，闷头弯腰一片一片拾了起来。而真正想离开的人，只是挑了一个风和日丽的下午，裹了件最常穿的大衣出了门，然后就再也没有回来过。',
  '你瞧这些白云聚了又散，散了又聚，人生离合，亦复如斯。',
  '经一场大梦，梦中见满眼山花如翡，如见故人，喜不自胜。',

  // '自然多好啊，有夏蝉有冬雪，有白夜有昼明，有一切祥和与安宁。不像人间，循规蹈矩，满目荒唐 ​​​。',
  // '人生太短了，看山是一天，看海也是一天，山多壮阔啊，海多好看。',
  // '你要是愿意，我就永远爱你，你要是不愿意，我就永远相思。',
  // '所谓自由，不是随心所欲，而是自我主宰。',

  `十年生死两茫茫,不思量，自难忘
  千里孤坟,无处话凄凉。`,
  `少年不识愁滋味，爱上层楼。爱上层楼，为赋新词强说愁。
  如今识尽愁滋味，欲说还休。欲说还休，却道天凉好个秋。`,
  '人生有两出悲剧。一是万念俱灰；另一是踌躇满志。',
  // '历史的经验教训告诉我们，人们不会从历史的经验中吸取教训。',
  `生如夏花之绚烂，死如秋叶之静美。`,

  `你能在浪费时间中获得乐趣，就不是浪费时间。`,
  `不要走在我后面，因为我可能不会引路；不要走在我前面，因为我可能不会跟随；请走在我的身边，做我的朋友。`,


];

let enText = [
  {
    en:`New day, new beginning.`,
    zh:`新的一天，新的开始。`,
  },
  {
    en:`People tell the world you're crazy. And all your protests to the contrary. Just confirm what they're saying.` ,
    zh:`人们都说你疯了。你越反抗。就越证明他们说的是对的。`,
  },
  {
    en:`I'm going to live every minute of it.`,
    zh:`我会努力把握生命里的每一分钟。`,
  },
  {
    en:`Workers of the world, unite!`,
    zh:`全世界无产者，联合起来`,
  },

  {
    en:`The world has kissed my soul with its pain, asking for its return in songs.`,
    zh:`世界以痛吻我，要我报之以歌。`,
  },

  {
    en:`For you, a thousand times over.`,
    zh:`为你，千千万万遍`,
  },

  {
    en:`Keep your face always toward the sunshine—and shadows will fall behind you.`,
    zh:`总是面向阳光,阴影就会被甩在身后。`,
  },

  {
    en:`It is always the simple that produces the marvelous.`,
    zh:`大道至简。`,
  },

  {
    en:`Try to be a rainbow in someone’s cloud.`,
    zh:`试着成为别人天空里的那道彩虹吧。`,
  },

  {
    en:`The furthest way about is the nearest way home.`,
    zh:`欲速则不达。`,
  },

  {
    en:`Only love can withstand the long years`,
    zh:`唯有热爱方能抵御岁月漫长`,
  },

  {
    en:`All reunions are worse than first encounter.`,
    zh:`浮生万里所有重逢都不过初遇。`,
  },

  {
    en:`It still a long to go before you put your worries in you pokect.`,
    zh:`把烦恼装进口袋，未来的路还很长。`,
  },

  {
    en:`It is the time you have wasted for your rose that makes your rose so important`,
    zh:`正因为你为你的玫瑰花费了时间，这才是你的玫瑰变的如此重要`,
  },

  {
    en:`Nothing is so common-place as to wish to be remarkable`,
    zh:`世界上最平凡的想法莫过于我是一个不平凡的人`,
  },

  {
    en:`Stay hungry , Stay Foolish`,
    zh:`饥渴求知，虚怀若愚。`,
  },

  {
    en:`Nothing is impossible,the word itself says 'i'm possible`,
    zh:`没有不可能，连“不可能”这个词自己都说：“不，可能！”`,
  },

  {
    en:`It makes sense only to love and to be loved at the same time.`,
    zh:`爱与被爱同时发生才有意义。`,
  },

  {
    en:`The sun won't run to you, the moon won't, the stars won't, but I shall.`,
    zh:`太阳不会奔向你，月亮不会，星星也不会，但我会。 ​​​`,
  },

  {
    en:`In spite of the strong wind, you can never give up.`,
    zh:`纵有疾风起，人生不言弃。`,
  },

  {
    en:`Standing in the busy crowd, but without you, I feel lonely.`,
    zh:`就算站在了人群中，但是没有你，我还是感到孤独。 ​​​`,
  },

  {
    en:`But it is what it is.`,
    zh:`但事已至此。`,
  },

  {
    en:`A man is not old until his regrets take place of his dreams. `,
    zh:`只有当遗憾取代了梦想，人才算老。 ​​​`,
  },

  {
    en:`I've never possessed you for a second, but it seems that I've lost you thousands of times.`,
    zh:`我从未拥有过你一秒，却仿佛失去了你千万次。`,
  },

  {
    en:`Had I not seen the Sun, I could have borne the shade. `,
    zh:`我本可以忍受黑暗，如果我不曾见过太阳。`,
  },

  {
    en:`I believed in a lof of things I don't believe any more.`,
    zh:`很多以前相信的东西，我现在已经不再坚信了。`,
  },

  {
    en:`We langhed and kept saying "see you soon", But inside we both knew we'd never see each other again`,
    zh:`虽然我们互相笑着说“回见”，但我们都心知肚明 分别即永别`,
  },

  {
    en:`If you can fight , fight.`,
    zh:`如果你能战斗，那就战斗。`,
  },

  {
    en:`We live alone ,we die alone , Everything else is just illusion`,
    zh:`我们孤独的活着，终将孤独的死去，人生不过一场虚无`,
  },

  {
    en:`We fight bravely all way,not to change world,but to the world can't change our`,
    zh:`我们一路奋战，不是为了改变世界，而是不让世界改变我们`,
  },

  {
    en:`In case I dont't see you , Good afternoon, good evening And good night `,
    zh:`假如再也碰不见你··· 祝你早安 午安 晚安`,
  },

  {
    en:`You still have a lot of time to make yourself be what you want. `,
    zh:`你还有大把的时间去成为自己想要的样子。 ​​​`,
  },

  {
    en:`All the work we've done todat is useless`,
    zh:`今天所有的辛苦又是白费`,
  },

  {
    en:`To deliberately believe in lise, while knowning their false`,
    zh:`即使明知是谎言，也会去相信`,
  },

  {
    en:`Why do we feel it's necessary to yak about bullshit in order to be comfortable?`,
    zh:`为什么我们要不停的说废话来维持气氛？`,
  },

  {
    en:`At first we don't know each other and at last we pretend we don't know each other.`,
    zh:`最初不相识，最终不相认。 ​​​`,
  },

  {
    en:`Sometimes ever, sometimes never.`,
    zh:`相聚有时，后会无期。`,
  },

  // {
  //   en:``,
  //   zh:``,
  // },

  // {
  //   en:``,
  //   zh:``,
  // },

  // {
  //   en:``,
  //   zh:``,
  // },

  // {
  //   en:``,
  //   zh:``,
  // },

  // {
  //   en:``,
  //   zh:``,
  // },


];
console.log(enText.length);
arr.push(...enText);


export default arr
/* 
大张旗鼓地离开，其实都是试探，真正的离开，是没有告别的，从来扯着嗓子喊着要走的人，都是最后自己把摔了一地的玻璃碎片，闷头弯腰一片一片拾了起来。而真正想离开的人，只是挑了一个风和日丽的下午，裹了件最常穿的大衣出了门，然后就再也没有回来过。


*/