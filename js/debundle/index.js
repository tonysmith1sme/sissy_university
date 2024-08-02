class s {
  static get CURRENT_VERSION() {
    return 2.2;
  }
  static get REQUIRED_CREDITS_UNLOCK_ELITE_CLUBS() {
    return 100;
  }
  static get PUNISHMENTS_DROP_MAJOR() {
    return 5;
  }
  static get REQUIRED_CREDITS_UNLOCK_INTERMEDIATE() {
    return 20;
  }
  static get REQUIRED_CREDITS_UNLOCK_ADVANCED() {
    return 50;
  }
  static get REQUIRED_CREDITS_UNLOCK_MASTER() {
    return 100;
  }
  static get REQUIRED_CREDITS_GRADUATION() {
    return 160;
  }
  static get REQUIRED_CREDITS_UNLOCK_PUNISHMENTS() {
    return 100;
  }
  static get MAX_ACTIVE_CLASSES() {
    return 8;
  }
  static get MAX_PUNISHMENTS() {
    return 10;
  }
  static get MAX_CLUBS() {
    return 5;
  }
  static get MAX_CLUBS_ELITE() {
    return 1;
  }
  static get MAX_PERKS() {
    return 10;
  }
  static get MAX_PARTNERS() {
    return 4;
  }
  static get BASE_TASK_MULTIPLIER() {
    return 1;
  }
  static get CLASS_BEGINNER_CREDITS() {
    return 1;
  }
  static get CLASS_INTERMEDIATE_CREDITS() {
    return 2;
  }
  static get CLASS_ADVANCED_CREDITS() {
    return 3;
  }
  static get CLASS_MASTER_CREDITS() {
    return 4;
  }
  static get ELITE_STUDENTS_CREDITS() {
    return 40;
  }
  static get PUNISHMENTS_FAIL_DAILY() {
    return 1;
  }
  static get PUNISHMENTS_FAIL_EXAM() {
    return 2;
  }
  static get PUNISHMENTS_FAIL_THESIS() {
    return 10;
  }
  static get TICK_RATE() {
    return 1000;
  }
  static get TICK_RATE_FAST() {
    return s.TICK_RATE / 10;
  }
}
class r {
  static weekdays() {
    return ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  }
  static todayNum() {
    return new Date().getDay().toString();
  }
  static todayName() {
    return r.weekdays()[r.todayNum()];
  }
  static currentCredits() {
    return Number(localStorage.getItem("currentCredits"));
  }
  static requiredCredits() {
    return JSON.parse(localStorage.getItem("requiredCredits"));
  }
  static classDailyTaskcredits(t) {
    switch (t.tier) {
      case "beginner":
        return s.CLASS_BEGINNER_CREDITS;
      case "intermediate":
        return s.CLASS_INTERMEDIATE_CREDITS;
      case "advanced":
        return s.CLASS_ADVANCED_CREDITS;
      case "master":
        return s.CLASS_MASTER_CREDITS;
      default:
        return 0;
    }
  }
  static classExamcredits(t) {
    return r.classDailyTaskcredits(t) * 3;
  }
  static difficulty() {
    return localStorage.getItem("difficulty");
  }
  static clubActivitiesDoneNum() {
    return localStorage.getItem("clubActivitiesDoneNum");
  }
}
class i {
  static view(t) {
    i.LoadHtml();
    i.LoadData();
  }
  static LoadHtml() {
    $("main").html("\n        <div class=\"container text-center\">\n        <div class=\"container text-center alert alert-danger\" style=\"display: none\">\n            <h1 class=\"\">警告:</h1>\n            <h5></h5>\n        </div>\n\n        <h1>欢迎来到男娘大学网络课程中心</h1>\n        <p>\n            男娘大学网络课程中心是一个长期的游戏，你可以其中获得各种各样的性癖开发。你最终将会选择一个或多个专业的课程进行学习，并建立一个每天都有课程表。课程的设计使其不会过多干预您的日常生活，每天只需要10到120分钟的“主动”学习即可。内有许多专业可供选择，每个专业都集中在不同的东西上，如“肛交工程学”，“性别转换学”，“色情心理学”，“公共关系学”和“口交工程学”等专业。此外还有丰富的课程可供选择，比如寸止课程、捆绑课程、灌肠课程、扩张课程、自缚课程、羞辱课程、宠物化课程、女性化课程、高潮训练、感官剥夺 课程、长期贞操等等课程。最棒的是，它完全免费，而且高度可定制。所以报名一个专业，参加一些课程，让旅程开始吧！ \n        </p>\n        <h6>所以开始选择一个你喜欢的专业，参加一些课程，开始你的学习之旅吧！！！</h6>\n        <h6>***建议你在开始学习先阅读校规！！！***</h6>\n        <br><h4>加入BrokenAngel的TG群<a href=\"t.me/@Br0k34A4g3l\">点击此处</a></h4>\n   <br>感谢原作者MAYA、抖喵酱的耕耘付出，有能力可以去支持一下原作者。<br>谢谢你们的游玩！！！<br>原版地址：<a href=\"https://sissy-university.com\">https://sissy-university.com</a><br>抖喵酱版本地址：<a href=\"https://sissy.game/sissy-university\">https://sissy.game/sissy-university</a></h4>\n        <br>\n        <hr>\n\n        <div id=\"index-buttons\">\n\n        </div>\n        <hr>\n        <div id=\"index-buttons-content\">\n            <div id=\"index-changelog\">\n                <h4>更新日志（自2.2版本开始在 <a href=\"https://github.com/Br0k34A4g3l/sissy_university/blob/master/Update.md\">Update.md</a> 中更新）</h4>\n                <h6>你的版本号是: <span id=\"currentVersion\"></span></h6>\n                <h6>使用Ctrl+F5刷新或只清除缓存的图像/文件以获取新版本。</h6>\n                <p class=\"text-left\">\n                <strong class=\"text\">2019年7月15日:v2.10抖喵酱汉化版</strong> <br>\n                    -新的极难惩罚(可以从设置中启用)<br>\n                    - 重做裸体课程<br>\n                    - 修正了一个错误<br>\n                    - 修正了一个错误，在低于100学分的时候重罚将不会被引用 <br>\n                    - 修正了一个4小时恢复后你会得到学分，再失败任务的错误<br>\n                    - 优化图片 <br>\n                    - 改进了页面加载性 <br>\n                    - 删除了年龄警告，因为它让一些用户感到困惑<br>\n                    - 文本修复<br>\n                    <br>\n                <strong class=\"text\">2019年7月1日: v2.00抖喵酱汉化版 </strong> <br>\n                    - 游戏引擎更新和优化<br>\n                    - 新增社区内容(见社区页面).<br>\n                    - 性高潮轮盘现在有了一个额外的按钮  <br>\n                    - 更新主页布局 <br>\n                    - 为新用户添加年龄警告 <br>\n                    - 增加了“已激活”为专业，班级，姬友，社团和处分的显示<br>\n                    - 当您将鼠标悬停在可单击的地方(图像和标题)上时，光标将发生变化<br>\n                    - 简单模式现在可以打开和关闭<br>\n                    - 修正了姬友错误地影响某些东西 <br>\n                    - 修正了一些任务不正确的持续时间 <br>\n                    - 修正了姬友和社团会影响学科考试的错误 <br>\n                    - 修正了一个精英学生俱乐部无限刷公假条的错误  <br>\n                    - 修正了一个当你已经有10个有效的处分的错误<br>\n                    - 图片更新<br>\n                    - 文本修复  <br>\n                    <br>\n                <strong class=\"text\">2019年5月6日: v1.91抖喵酱汉化版</strong> <br>\n                    - 由于安全原因禁用了排名/排行榜 漏洞<br>\n                    - 更新的支持者列表 <br>\n                    - 修正了姬友不会影响某些类的bug<br>\n                    - 修正课程列表<br>\n                    <br>\n                <strong class=\"text\">2019年4月21日: v1.90</strong> <br>\n                    - 新的专业 - 强制榨精研究学<br>\n                    - 新课程 - 209, 309, 409  <br>\n                    - 调整了101和201课程<br>\n                    - 更新的支持者列表<br>\n                     <br>\n                    <strong class=\"text\">08-Apr-2019: v1.85</strong> <br>\n                    - NEW Major - Oral Technologies<br>\n                    - Reworked Fluid Mechanics major<br>\n                    - Reworked Enema classes<br>\n                    - Reworked Oral classes<br>\n                    - New Partner - Christina <br>\n                    - Reworked Partners - Nina, Mizuki, Ina and Laura<br>\n                    - Removed Partners - Belle, Anna, Lucy, Erika<br>\n                    - Updated Help/Info page with Estim/Electro toys <br>\n                    - Updated Help/Info page with \"sex noise\" files (see Audio and Video section)<br>\n                    <br>\n                    <strong class=\"text\">01-Apr-2019: v1.80</strong> <br> \n                    - Players who have previously completed Penetration Technologies will now have Sex Trades completed.<br>\n                    - When viewing a class/club/punishment/major, clicking on its image will send you back to the previous page<br>\n                    - Fixed a bug where Ina and Laura wouldn't affect classes<br>\n                    - Potentially fixed a bug where players would get punished for no reason.<br>\n                    - Fixed a bug where Yumeko would give extra credits <br>\n                     <br>\n                    <strong class=\"text\">25-Mar-2019: v1.75</strong> <br> \n                    - Penetration Technologies is now Sex Trades <br>\n                    - Sex Trades is now Sex Slavery<br>\n                    - Reworked Classes - 215, 415 <br>\n                    - NEW Classes - 220, 320, 420 <br>\n                    - Reworked Public Relations Major<br>\n                    - Reworked Bondage and Masochism classes <br>\n                    - Reworked Female classes <br>\n                    - Reworked schedule for all classes <br>\n                    - Image updates <br>\n                    - Credit requirement for classes is now 20/50/100 (previously 12/44/104) <br>\n                    - Fixed Compact course list <br>\n                    - Fixed a bug where punishments would be dismissed incorrectly <br>\n                    - Fixed a bug where the Task page would show incorrect timers<br>\n                    - Fixed a bug where you would get an error when punished<br>\n                    <br>\n                    <strong class=\"text\">18-Mar-2019: v1.70</strong> <br>\n                    - NEW Partner - Yumeko<br>\n                    - Maximum number of partners increased to 4 (previously 3)<br>\n                    - Removed classes 109, 209, 309, 409 <br>\n                    - Edging 110 no longer allows orgasms <br>\n                    - Removed the Asphyxia punishment <br>\n                    - Leaving an Elite Club will now reset your class skips to 0<br>\n                    - Pausing a Task for more than 4 hours will result in a punishment <br>\n                    - Fixed a bug where classes would be missing after importing data <br>\n                    - Fixed a bug where a classes started on the previous day would not show up again in schedule after completing their task<br>\n                    - Fixed a bug where you wouldn't get punishments for failing a task <br>\n                    - Fixed a bug which would allow graduating without meeting the requirements <br>\n                    - Fixed a bug which would prevent you from graduating <br>\n                    - Fixed a bug where you'd get an extra punishment from failing a task<br>\n                    - Fixed a bug where Partners would give extra credits when activated after a Task has been started<br>\n                    - Fixed an exploit that would let you farm class skips using the Elite Club<br>\n                    - Fixed an exploit that would allow pausing tasks forever <br>\n                    <br>\n                    <strong class=\"text\">11-Mar-2019: v1.65</strong> <br>\n                    - Optimized game engine<br>\n                    - Optimized website <br>\n                    - Optimized images <br>\n                    - NEW Orgasm Roulette (available in the Progress page)<br> \n                    - Updated Help/Info/Rules page<br>\n                    - Updated toy sizes<br>\n                    - UI improvements<br>\n                    - Decreased difficulty of 215 class<br>\n                    - Decreased punishments for dropping a major to 5 (previously 10)<br>\n                    <br>\n                    <strong class=\"text\">18-Feb-2019: v1.60</strong> <br>\n                    - Increased difficulty of Oral tasks in 405 and 412<br>\n                    - x13 classes are now x10. Edging 213 is now Edging 110<br>\n                    - Pet Play 217 is now PetPlay 117<br>\n                    - Updated names for classes (301, 305, 311, 312, 401) <br>\n                    - Reworked cum-play classes (106, 306, 406)<br>\n                    - Class 403 now has a timer for daily tasks <br>\n                    - Elite Club now increases points by 40 for each perk (previously 20) <br>\n                    - Medical club perks have been switched <br>\n                    - Updated Public classes and clubs <br>\n                    - You can now view classes that have active tasks/timers<br>\n                    - Text fixes.<br>\n                    <br>\n                    <strong class=\"text\">11-Feb-2019: v1.55</strong><br>\n                    - NEW Easy Mode (can be enabled from <a href=\"settings.html\">Settings</a>). Allows classes to be\n                    attended\n                    on any day without penalties.<br>\n                    - Tasks on <a href=\"schedule.html\">Schedule page</a> now show correct amount of credits when\n                    affected by Partners.<br>\n                    - Fixed a bug where players would have missing classes for the day. In case you still do, go to\n                    Settings page and click the fix button<br>\n                    - Fixed links in compact course list <br>\n                    <br>\n                    <strong class=\"text\">06-Feb-2019: v1.52</strong><br>\n                    - Interface improvements<br>\n                    - Image updates<br>\n                    - Text fixes<br>\n                    <br>\n                    <strong class=\"text\">05-Feb-2019: v1.51</strong><br>\n                    - Game will auto update from now on to avoid confusion.<br>\n                    - Potentially fixed a bug that gave credits for no reason.<br>\n                    - Text fixes (Charlotte, Hypnosis, Brainwashing)<br>\n                    <br>\n                    <strong class=\"text\">04-Feb-2019: v1.50</strong><br>\n                    - NEW Partners - replace the difficulty system.<br>\n                    - Made classes/punishments/clubs lists - collapsible/expandable by clicking on their category title\n                    (the big black bars).<br>\n                    - Updated interface in Schedule and Progress pages<br>\n                    - Added new button in <a href=\"settings.html\">Settings</a><br>\n                    - Increased difficulty of anal classes 311, 312, 402<br>\n                    - Decreased difficulty of Anal Technologies final thesis<br>\n                    - Increased difficulty of Penetration Technologies final thesis<br>\n                    - Decreased difficulty of Gender Studies final thesis<br>\n                    - Improved Punishments system<br>\n                    - Fixed - punishments for Psychology Major thesis<br>\n                    <br>\n                    <strong class=\"text\">28-Jan-2019: v1.45</strong><br>\n                    - NEW Exercise and Fitness clubs<br>\n                    <br>\n                    <strong class=\"text\">26-Jan-2019: v1.44</strong><br>\n                    - Fixed - getting punished from tasks that have been started the previous day.<br>\n                    <br>\n                    <strong class=\"text\">22-Jan-2019: v1.43</strong><br>\n                    - Updated Penetration Technologies Major<br>\n                    - Updated Compact Course List<br>\n                    <br>\n                    <strong class=\"text\">21-Jan-2019: v1.42</strong><br>\n                    - Added warning message for unsupported browsers<br>\n                    - Decreased difficulty of anal classes<br>\n                    - Updated 313 and 413 Orgasm classes<br>\n                    - Rebalanced 305 and 405 Oral classes<br>\n                    - Boosted clubs to 8%, 16% and 30% (previously 5%, 10% and 25%)<br>\n                    - Text updates (classes, punishments, clubs)<br>\n                    - Fixed - you could join an Elite club with less than 100 credits<br>\n                    - Fixed - task multiplier would display incorrectly on the Schedule page<br>\n                    - Fixed - getting punished for no reason.<br>\n                    - Fixed - save data would import incorrectly.<br>\n                    <br>\n                    <strong class=\"text\">11-Jan-2019: v1.41</strong><br>\n                    <strong>- NEW Tasks and Timers System for classes and majors (See Help page)</strong><br>\n                    - Increased limit of maximum active classes. You can join up to 8 classes now\n                    - Updated descriptions for feminisation and fetish classes. (See Others in Help for clothing\n                    info)<br>\n                    - You no longer lose points for failing daily class tasks or exams. Instead you get punished. (See\n                    Punishments in Help page)<br>\n                    - You lose less points for dropping a class (See Credits system in Help page)<br>\n                    - Feminization major and classes now include shaving <br>\n                    - Decreased difficulty of petplay classes <br>\n                    - Rebalanced Sex Psychology Major and classes<br>\n                    - Rebalanced Sex Trades major <br>\n                    - Rebalanced Exhibitionism classes 316 and 416 <br>\n                    - Image Updates <br>\n                    - Text fixes <br>\n                    <br>\n                    <strong class=\"text\">03-Jan-2019: v1.35</strong><br>\n                    - Server got upgraded with an SSL certificate which could result in data loss.\n                    If you've lost your data, please import your old one from GitLab which is 1-2 days old. I'm very\n                    sorry for the inconvenience.<br>\n                    - Multipliers now apply to punishments <br>\n                    - Improved the multipliers system.<br>\n                    - Ranking is now based on a new scoring algorithm and not Credits, resubmit your progress.<br>\n                    - Rebalanced chastity classes. <br>\n                    - Fetish classes now include corsets.<br>\n                    - Added female classes X07 - 107, 207, 307, 407. <br>\n                    - Fetish X18 classes are now X08.<br>\n                    - Masturbation X19 classes are now X09.<br>\n                    - Added new punishment - Group Rape. <br>\n                    - Improved punishments<br>\n                    - \"Feminization Club\" is now the new \"Girls Club\".<br>\n                    - Previous \"Girls Club\" is now \"Lesbian Club\".<br>\n                    - Updated images <br>\n                    - Text fixes<br>\n                    - Made tasks more gender neutral<br>\n                    <br>\n                    <a class=\"text\">31-Dec-2018: </a><br>\n                    - Fixed multipliers. <br>\n                    - No need to rejoin clubs after updating anymore. <br>\n                    - Improved Pet Play classes. <br>\n                    <br>\n                    <strong class=\"text\">29-Dec-2018: </strong><br>\n                    - New Clubs system split into two tiers. You can join up to 5 clubs and activate up to 10 perks <br>\n                    - Improved multipliers system. <br>\n                    - Bug fixes<br>\n                    - Text fixes<br>\n                    <br>\n                    <strong class=\"text\">26-Dec-2018: </strong><br>\n                    - NEW Import/Export save data option is <a href=\"settings.html\">Settings</a><br>\n                    - Dropping out of a class now has penalties<br>\n                    - Active classes are now limited to 6<br>\n                    - Rebalanced credits requirements <br>\n                    - Visual improvements <br>\n                    - Bug fixes<br>\n                    - Text fixes <br>\n                    <br>\n                    <strong class=\"text\">23-Dec-2018: </strong><br>\n                    - NEW Major - Fetish Design <br>\n                    - NEW Classes - x18 and x19<br>\n                    - Renamed some majors and classes. <br>\n                    - Required credits for graduation are now 160 (previous - 140)<br>\n                    - Increased credit penalties for skipping/failing classes <br>\n                    - Punishments no longer reward credits<br>\n                    - Clubs no longer reward credits<br>\n                    - Elite club increases required credits by 20 for each option (previous - 15) <br>\n                    - Improved multipliers system.<br>\n                    - Rebalanced some classes. <br>\n                    - Decreased difficulty of Asphyxiation punishment <br>\n                    - Changed color scheme. <br>\n                    - Image updates <br>\n                    - Text fixes<br>\n                    <br>\n                    <a class=\"text\">01-Dec-2018: </a><br>\n                    - Enabled weekend classes. You can do all your classes on weekends.\n                    They are optional and you won't be punished if you don't attend them by the end of the day.<br>\n                    <br>\n                    <strong class=\"text\">30-Nov-2018: </strong><br>\n                    - New update system - saves all progress except clubs. <br>\n                    - New difficulties system <br>\n                    - Added Japanese Culture Club. <br>\n                    - Reworked feminization classes. <br>\n                    - Reworked Stuffing Science and Pet play majors <br>\n                    - New compact course list chart in <a href=\"rules.html\">Info page</a><br>\n                    - Improved punishments system<br>\n                    - Updated <a href=\"rules.html\">Info page</a><br>\n                    - Minor code improvements <br>\n                    <br>\n                    <a class=\"text\">29-Nov-2018 - Updated religious studies clubs and sorted the rankings page.</a><br>\n                    <br>\n                    <strong>26-Nov-2018 - BIG UPDATE: <br>\n                        PLEASE GO TO SETTINGS AND RESET THE GAME COMPLETELY<br></strong>\n                    - NEW Discord chat channel <a href=\"https://discord.gg/bYpvdfG\">https://discord.gg/bYpvdfG</a><br>\n                    - NEW Online leaderboard (beta)<br>\n                    - NEW Credits system. Greater freedom when choosing classes.<br>\n                    - NEW Clubs system that directly affects your daily tasks.<br>\n                    - NEW Majors - Public Relations, Sex Trades and Pet Science<br>\n                    - NEW Classes focusing on cum-play, publicity/exhibitionism, sex training/slavery, masochism,\n                    chastity,\n                    feminization and pet play<br>\n                    - NEW Punishments.<br>\n                    - NEW Interface updates on schedule and progress page. Improved design and function.<br>\n                    - REWORKED Fluid Dynamics major. It's a dual-path major focusing on enemas and cum-play<br>\n                    - REWORKED Almost all classes. Further separation between all classes.<br>\n                    - REWORKED Almost all clubs. Clubs directly modify task values of classes.<br>\n                    - REWORKED Almost all punishments. Improved balance and separated them into tiers.<br>\n                    - Simplified rules and tasks.<br>\n                    - Updated shopping list.<br>\n                    - Code and image optimisations<br>\n                    - Added donation button. Please help me keep this site running. <br>\n                    <br>\n                    01-Nov-2018 - SEO and website optimizations. Reduced loading times <br>\n                    10-Oct-2018 - New Host. Active development resumed. GitHub admins deleted the original project. <br>\n                    25-Aug-2018 - Fixed top menu loading. New android APK (For Android 7 and newer) - <a\n                        href=\"https://mega.nz/#!OHxxXLYJ!TNOGqFFKxXKDH6-VegJnzrM9lrgznKcuaBHUjSGux0w\">LINK</a> <br>\n                    24-Aug-2018 - Added Hypno recommendations in <a href=\"rules.html\">Info and Rules page</a> <br>\n                    23-Aug-2018 - Updated shopping list. <br>\n                    22-Aug-2018 - Minor text fixes. Added update button. <br>\n                    20-Aug-2018 - Android beta apk released. Check the repo for details\n                    <a href=\"https://github.com/mayatrap/sissy_university\">LINK</a> <br>\n                    19-Aug-2018 - Added \"Leave Class\" functionality. Added perk counters in schedule page. Balanced\n                    classes.<br>\n                    17-Aug-2018 - Improved mobile device compatibility. Added precum increasing supplements in Info\n                    page.<br>\n                    15-Aug-2018 - Initial release<br>\n                </p>\n            </div>\n            <div class=\"text-left\" id=\"index-contacts\">\n                <h5 class=\"text-center\">\n        </a><br>\n                </p>\n                <hr>\n            </div>\n        </div>\n    </div>");
  }
  static LoadData() {
    $("#currentVersion").text(localStorage.getItem("gameVersion"));
    $("#latestVersion").text(s.CURRENT_VERSION);
    let t = $("#index-buttons");
    t.append($("<button class=\"btn btn-secondary btn-margin\">更新日志</button>").on("click", i.viewChangelog));
    t.append($("").on("click", i.viewSupporters));
    t.append($("").on("click", i.viewContacts));
  }
  static viewChangelog() {
    $("#index-contacts").hide();
    $("#index-supporters").hide();
    $("#index-changelog").show();
  }
  static viewContacts() {
    $("#index-contacts").show();
    $("#index-supporters").hide();
    $("#index-changelog").hide();
  }
  static viewSupporters() {
    $("#index-contacts").hide();
    $("#index-supporters").show();
    $("#index-changelog").hide();
  }
}
class o {
  static get classesData() {
    return {
      1001: {
        id: "1001",
        imgUrl: "#",
        type: "class",
        name: "户外露出",
        name2: "裸体课程",
        prerequisites: "",
        days: "1 5",
        description: "露出你的身体会让你感到身心愉悦。（这是入门课程）",
        tier: "beginner",
        daily1: "保持只穿内衣 30minutes 。",
        daily2: "保持完全裸体 15minutes 。",
        exam1: "保持只穿内衣 60minutes 。",
        exam2: "保持完全裸体 30minutes 。",
        tags: "nudity",
        community: true
      },
      1002: {
        id: "1002",
        imgUrl: "#",
        type: "class",
        name: "完全裸体",
        name2: "裸体课程",
        prerequisites: "1001",
        days: "1 2 5",
        description: "你会对裸体的想法感到身心愉悦。（这是普通课程）",
        tier: "intermediate",
        daily1: "保持只穿内衣 60minutes 。",
        daily2: "保持完全裸体 30minutes 。",
        exam1: "保持只穿内衣 120minutes 。",
        exam2: "保持完全裸体 60minutes 。",
        tags: "nudity",
        community: true
      },
      1003: {
        id: "1003",
        imgUrl: "#",
        type: "class",
        name: "裸体主义",
        name2: "裸体课程",
        prerequisites: "1002",
        days: "1 2 5",
        description: "你将学会享受裸体。（这是高级课程）",
        tier: "advanced",
        daily1: "保持只穿内衣 120minutes 。",
        daily2: "保持完全裸体 60minutes 。",
        exam1: "保持只穿内衣 360minutes 。",
        exam2: "保持完全裸体 120minutes 。",
        tags: "nudity",
        community: true
      },
      1004: {
        id: "1004",
        imgUrl: "#",
        type: "class",
        name: "廁板洞练习",
        name2: "【抖喵酱系列课程】",
        prerequisites: "105 104",
        days: " 2 4",
        description: "你将接受正确洗脑教育，女式气质是这门课的前置必修课。你要准备把所有的假阳具吸到浴室的墙上。",
        tier: "intermediate",
        daily1: "给假阳具(M码)口交 10minutes 。",
        daily2: "用假阳具(M码)操自己的菊穴 10minutes （至少30 BPM）。",
        exam1: "用两根假阳具(S码和M码)轮流操自己的菊穴 15minutes （至少 45BPM） 。",
        exam2: "深喉假阳具（M码） 10times（每次保持在喉咙最深处2秒），然后再用假阳具操你的菊穴5分钟，重复三次  。",
        tags: "slave",
        community: true
      },
      1005: {
        id: "1005",
        imgUrl: "#",
        type: "class",
        name: "公共便器课程",
        name2: "【抖喵酱系列课程】",
        prerequisites: "104 1004",
        days: " 3 4 5",
        description: "你将在这门课上进行实地考察，必须在公共厕所里完成，在隔间只能穿胸罩和内裤，嘴里塞着丝袜。",
        tier: "advanced",
        daily1: "坐在马桶盖上，用假阳具（L码）操你的菊穴 30minutes，你可以在进行途中休息5分钟。",
        daily2: "将假阳具吸在隔间门上，用假阳具（L码）操你的菊穴 10minutes，任务过程中必须用耳塞播放洗脑音频。",
        exam1: "在公共厕所里，用假阳具（XL码）操你的菊穴每分钟 10minutes，速度要保持在 120BPM以上。",
        exam2: "在公共厕所里，找一个马桶塞然后用它操你的菊穴 10minutes，任务过程中你的脸颊一定要贴着马桶座圈。",
        tags: "doumiaojiang",
        community: true
      },
      1006: {
        id: "1006",
        imgUrl: "#",
        type: "class",
        name: "身体写作课程",
        name2: "【抖喵酱系列课程】",
        prerequisites: "1004",
        days: " 3 5",
        description: "本课程将练习你的审美，写作，还有自我羞辱的技巧。",
        tier: "advanced",
        daily1: "在身上用马克笔写上或使用纹身贴上10个羞辱性的词汇，不要重复，保持 120minutes。",
        daily2: "在脸上上用马克笔写上或使用纹身贴上5个羞辱性的词汇，不要重复，保持 60minutes。",
        exam1: "在身上用马克笔写上或使用纹身贴上20个羞辱性的词汇，不要重复，保持 240minutes。",
        exam2: "在身上用马克笔写上或使用纹身贴上5个羞辱性的词汇，不要重复，保持 1440minutes。",
        tags: "doumiaojiang",
        community: true
      },
      1007: {
        id: "1007",
        imgUrl: "#",
        type: "class",
        name: "菊穴内射调教",
        name2: "【抖喵酱系列课程】",
        prerequisites: "101 102",
        days: "2 4",
        description: "这门课程将让感受被中出的快感！",
        tier: "intermediate",
        daily1: "用假阳具（M码）操你的菊穴 15minutes，时间到后将 200ml 假精液灌入菊穴，保持2分钟后排泄。",
        daily2: "将 100ml 假精液灌入菊穴，然后用假阳具（M码）操你的菊穴 3minutes 后即可排泄。",
        exam1: "用假阳具（L码）操你的菊穴 20minutes，时间到后将 400ml 假精液灌入菊穴，保持4分钟后排出。",
        exam2: "将 200ml 假精液灌入菊穴，然后用假阳具（L码）操你的菊穴 5minutes 后即可排泄。",
        tags: "doumiaojiang",
        community: true
      },
      1008: {
        id: "1008",
        imgUrl: "#",
        type: "class",
        name: "菊穴中出课程",
        name2: "【抖喵酱系列课程】",
        prerequisites: "1007",
        days: "2 4 5",
        description: "你将学会让精液在菊穴内发出噗呲噗呲的声音！",
        tier: "advanced",
        daily1: "用假阳具（L码）操你的菊穴 20minutes，时间到后将 500ml 假精液灌入菊穴，保持6分钟后排出。",
        daily2: "将 300ml 假精液灌入菊穴，然后用假阳具（L码）操你的菊穴 7minutes 后即可排泄。",
        exam1: "用假阳具（L码）操你的菊穴 30minutes，时间到后将 1000ml 假精液灌入菊穴，保持10分钟后排出。",
        exam2: "将 500ml 假精液灌入菊穴，然后用假阳具（L码）操你的菊穴 10minutes 后即可排泄。",
        tags: "doumiaojiang",
        community: true
      },
      1009: {
        id: "1009",
        imgUrl: "#",
        type: "class",
        name: "菊穴灌精课程",
        name2: "【抖喵酱系列课程】",
        prerequisites: "1008",
        days: "1 3 5",
        description: "你将学会熟悉被100人轮奸后内射的感觉。",
        tier: "master",
        daily1: "用假阳具（XL码）操你的菊穴 30minutes，时间到后将 1000ml 假精液灌入菊穴，保持10分钟后排出。",
        daily2: "将 500ml 假精液灌入菊穴，然后用假阳具（XL码）操你的菊穴 10minutes 后即可排泄。",
        exam1: "用假阳具（XL码）操你的菊穴 45minutes，时间到后将 1000ml 假精液灌入菊穴，塞入肛塞（XL码）保持15分钟后排出。",
        exam2: "将 1000ml 假精液灌入菊穴，然后用假阳具（XL码）操你的菊穴 10minutes 后即可排泄。",
        tags: "doumiaojiang",
        community: true
      },
      1013: {
        id: "1013",
        imgUrl: "#",
        type: "class",
        name: "肛塞健身课",
        name2: "【抖喵酱系列课程】",
        prerequisites: "202",
        days: "3 5 6 0",
        description: "这是一门体育课，你要佩戴肛塞完成指定次数动作。",
        tier: "advanced",
        daily1: "佩戴肛塞（M码）完成深蹲 15times 2组，肛塞滑出或脱落即为失败。",
        daily2: "佩戴肛塞（M码）完成侧抬腿 10times 3组，肛塞滑出或脱落即为失败。",
        exam1: "佩戴肛塞（L码）完成深蹲 20times 3组，肛塞滑出或脱落即为失败。",
        exam2: "佩戴肛塞（L码）完成侧抬腿 12times 5组，肛塞滑出或脱落即为失败。",
        tags: "doumiaojiang",
        community: true
      },
      1011: {
        id: "1011",
        imgUrl: "#",
        type: "class",
        name: "假阳具健身课",
        name2: "【抖喵酱系列课程】",
        prerequisites: "102",
        days: "2 4 6 0",
        description: "这是一门体育课，你要插入假阳具完成指定次数动作。",
        tier: "intermediate",
        daily1: "将假阳具（S码）插入菊穴/小穴，用内裤或胶带固定，完成原地跳跃（ 20times） 2组，假阳具滑出或脱落即为失败。",
        daily2: "将假阳具（S码）插入菊穴/小穴，用内裤或胶带固定，完成站姿后踢腿（ 10times） 3组，假阳具滑出或脱落即为失败。",
        exam1: "将假阳具（M码）插入菊穴/小穴，用内裤或胶带固定，完成原地跳跃（ 30times） 3组，假阳具滑出或脱落即为失败。",
        exam2: "将假阳具（M码）插入菊穴/小穴，用内裤或胶带固定，完成站姿后踢腿（ 15times） 4组，假阳具滑出或脱落即为失败。",
        tags: "doumiaojiang",
        community: true
      },
      1014: {
        id: "1014",
        imgUrl: "#",
        type: "class",
        name: "羞耻爬行课",
        name2: "【抖喵酱系列课程】",
        prerequisites: "117",
        days: "1 6 0",
        description: "这是一门体育课，你要学会用四肢爬行来锻炼身体。",
        tier: "intermediate",
        daily1: "将5个假阳具或肛塞放在房间各处，用四肢爬行的方法将其用嘴叼会游戏开始的地点。（禁止用手触碰物体，和站立行走）",
        daily2: "将假阳具（M码）或肛塞（M码）插入菊穴，佩戴口塞、乳头夹在室内爬行100米。（禁止站立行走）",
        exam1: "佩戴上手铐和脚拷，将10个假阳具或肛塞放在房间各处，用四肢爬行的方法将其用嘴叼会游戏开始的地点。（禁止用手触碰物体，和站立行走）",
        exam2: "将假阳具（M码）或肛塞（M码）插入菊穴，佩戴口塞、乳头夹、手铐和脚拷在室内爬行200米。（禁止站立行走）",
        tags: "doumiaojiang",
        community: true
      },
      101: {
        id: "101",
        imgUrl: "#",
        type: "class",
        name: "入门液体学 101",
        name2: "灌肠和尿play",
        prerequisites: "",
        days: "1 5",
        description: "你将学会使用不同的液体。",
        tier: "beginner",
        daily1: "灌入250毫升灌肠液(任何液体)，保持 4minutes 。",
        daily2: "尿在你自己身上。",
        exam1: "灌入500毫升灌肠液(任何液体)，保持 8minutes 。",
        exam2: "尿在你的脸上。",
        tags: "fluid"
      },
      201: {
        id: "201",
        imgUrl: "#",
        type: "class",
        name: "液体调教学 201",
        name2: "灌肠和尿play",
        prerequisites: "101",
        days: "1 5",
        description: "你会习惯吞下(嘴穴和菊穴)各种不同的液体",
        tier: "intermediate",
        daily1: "灌入500毫升灌肠液(任何液体)，保持 4minutes。",
        daily2: "尿在你的脸上。",
        exam1: "灌入500毫升灌肠液(任何液体)，保持 8minutes。",
        exam2: "尿在你的嘴里。",
        tags: "fluid"
      },
      301: {
        id: "301",
        imgUrl: "#",
        type: "class",
        name: "进阶液体控制学 301",
        name2: "灌肠和尿play",
        prerequisites: "201",
        days: "1 5",
        description: "你将崇拜任何液体！",
        tier: "advanced",
        daily1: "灌入500毫升灌肠液(任何液体)，保持 10minutes 。",
        daily2: "尿在你的嘴里。",
        exam1: "灌入750毫升灌肠液(任何液体)，保持 12minutes 。",
        exam2: "喝下50毫升的尿液。",
        tags: "fluid"
      },
      401: {
        id: "401",
        imgUrl: "#",
        type: "class",
        name: "大师级液体掌控学 401",
        name2: "灌肠和尿play",
        prerequisites: "301",
        days: "1 5",
        description: "你将学掌控有大量的液体。",
        tier: "master",
        daily1: "灌入750毫升灌肠液(任何液体)，保持 10minutes 。",
        daily2: "喝下50毫升的尿液。",
        exam1: "灌入1000毫升灌肠液(任何液体)，保持 15minutes 。",
        exam2: "喝下100毫升的尿液。",
        tags: "fluid"
      },
      102: {
        id: "102",
        imgUrl: "#",
        type: "class",
        name: "菊穴认知学 102",
        name2: "菊穴",
        prerequisites: "",
        days: "1 3 5",
        description: "你会发现新的奇妙源泉。",
        tier: "beginner",
        daily1: "用假阳具(S码)操自己的菊穴 5minutes 。",
        daily2: "佩戴肛塞(S码) 30minutes 。",
        exam1: "用假阳具(S码)操自己的菊穴 10minutes 。",
        exam2: "佩戴肛塞(S码) 60minutes 。",
        tags: "penetration"
      },
      302: {
        id: "302",
        imgUrl: "#",
        type: "class",
        name: "菊穴开发学 302",
        name2: "菊穴",
        prerequisites: "102",
        days: "1 3 5",
        description: "学习如何用菊穴接受更快，更深，更大的肉棒。",
        tier: "advanced",
        daily1: "用假阳具(M码)操自己的菊穴 15minutes 。",
        daily2: "用假阳具(L码)操自己的菊穴 10minutes 。",
        exam1: "用假阳具(M码)操自己的菊穴 30minutes 。",
        exam2: "用假阳具(L码)操自己的菊穴 20minutes 。",
        tags: "penetration"
      },
      402: {
        id: "402",
        imgUrl: "#",
        type: "class",
        name: "大师级肛交研究402",
        name2: "菊穴",
        prerequisites: "302",
        days: "1 3 5",
        description: "你享受肛交带来的快乐，忘记其他事情。",
        tier: "master",
        daily1: "用假阳具(M码)操自己的菊穴 30minutes 。",
        daily2: "用假阳具(L码)操自己的菊穴 20minutes 。",
        exam1: "用假阳具(L码)操自己的菊穴 60minutes 。",
        exam2: "用假阳具(XL码)操自己的菊穴 40minutes 。",
        tags: "penetration"
      },
      103: {
        id: "103",
        imgUrl: "#",
        type: "class",
        name: "入门级贞操管理学 103",
        name2: "贞操",
        prerequisites: "",
        days: "2 3 4",
        description: "你将会记住佩戴贞操（笼/带）和禁止高潮。",
        tier: "beginner",
        daily1: "佩戴 120minutes 的贞操（笼/带）。",
        daily2: "佩戴贞操（笼/带）观看 30minutes 的色情片。",
        exam1: "佩戴 240minutes 的贞操（笼/带）。",
        exam2: "佩戴贞操（笼/带）观看 60minutes 的色情片。",
        tags: "chastity"
      },
      203: {
        id: "203",
        imgUrl: "#",
        type: "class",
        name: "贞操控制学 203",
        name2: "贞操",
        prerequisites: "103",
        days: "1 2 3 4",
        description: "你将学会长时间保持佩戴贞操（笼/带）。",
        tier: "intermediate",
        daily1: "佩戴 360minutes 的贞操（笼/带）。",
        daily2: "佩戴 240minutes 的贞操（笼/带），其中观看30分钟以上的色情片。",
        exam1: "佩戴 480minutes 小时的贞操（笼/带）。",
        exam2: "晚上的时候佩戴贞操（笼/带）睡觉，直到次日。",
        tags: "chastity"
      },
      303: {
        id: "303",
        imgUrl: "#",
        type: "class",
        name: "长期贞操控制学 303",
        name2: "贞操",
        prerequisites: "203",
        days: "1 2 3 4",
        description: "你很快就会忘记高潮是什么感觉了！",
        tier: "advanced",
        daily1: "佩戴 1380minutes 的贞操（笼/带）。",
        daily2: "佩戴 720minutes 的贞操（笼/带），必须在佩戴过程中观看30分钟以上的色情片才能解锁。",
        exam1: "佩戴 1380minutes 的贞操（笼/带），必须在佩戴过程中观看60分钟以上的色情片才能解锁。",
        exam2: "把自己锁在贞操（笼/带）中，直到获得前列腺高潮，才能解锁。",
        tags: "chastity"
      },
      403: {
        id: "403",
        imgUrl: "#",
        type: "class",
        name: "永久贞操管理学 403",
        name2: "贞操",
        prerequisites: "303",
        days: "1 2 3 4 5",
        description: "你将会体验到锁死性器官的绝望感。",
        tier: "master",
        daily1: "佩戴 1440minutes 的贞操（笼/带）。",
        daily2: "佩戴 1440minutes 的贞操（笼/带）。",
        exam1: "佩戴 10080minutes 的贞操（笼/带）。",
        exam2: "把自己锁在贞操（笼/带）中，直到获得 2times（菊穴/前列腺）高潮，才能解锁。",
        tags: "chastity"
      },
      104: {
        id: "104",
        imgUrl: "#",
        type: "class",
        name: "女性化课程 104",
        name2: "女性化",
        prerequisites: "",
        days: "2 3 4",
        description: "你会开始发掘你女性的一面。(服装信息见“帮助/校规”中的“其他”)",
        tier: "beginner",
        daily1: "穿 60minutes 的可爱的内裤。",
        daily2: "穿 60minutes 的可爱的胸罩。",
        exam1: "穿 120minutes 的可爱内衣。",
        exam2: "穿 30minutes 的可爱内衣的同时听着洗脑音频。",
        tags: "feminization"
      },
      204: {
        id: "204",
        imgUrl: "#",
        type: "class",
        name: "变装课程 204",
        name2: "女性化",
        prerequisites: "104",
        days: "1 2 3 4",
        description: "你会开始学着像个女孩一样穿衣和思考。(服装信息见“帮助/校规”中的“其他”)",
        tier: "intermediate",
        daily1: "穿着可爱的内衣和可爱的衣服，听 30minutes 的洗脑音频。",
        daily2: "穿着可爱的内衣和可爱的衣服保持 120minutes 。",
        exam1: "穿着可爱的内衣和两件可爱的衣服保持 120minutes ，其中要听30分钟的的洗脑音频。",
        exam2: "刮干净你的胯部、腋窝。",
        tags: "feminization"
      },
      304: {
        id: "304",
        imgUrl: "#",
        type: "class",
        name: "高级变性课程 304",
        name2: "女性化",
        prerequisites: "204",
        days: "1 2 3 4",
        description: "你会穿得像个女孩，脑子里的想法也会逐渐变得娘化。",
        tier: "advanced",
        daily1: "穿着可爱的内衣和两件可爱的衣服保持 120minutes ，其中要听30分钟以上的的洗脑音频。",
        daily2: "穿可爱的内衣和三件可爱的衣服保持 180minutes 。",
        exam1: "穿可爱的内衣和三件可爱的衣服保持 240minutes ，其中要听45分钟以上的的洗脑音频。",
        exam2: "把你的腿毛刮干净。穿着可爱的内衣和三件可爱的衣服，化妆，戴假发(长发)保持 120minutes 。",
        tags: "feminization"
      },
      404: {
        id: "404",
        imgUrl: "#",
        type: "class",
        name: "完全女性改造实验 404",
        name2: "女性化",
        prerequisites: "304",
        days: "1 2 3 4 5",
        description: "上完这节课，没人会知道你是不是男孩，即使是你自己。",
        tier: "master",
        daily1: "穿着可爱的内衣和可爱的衣服保持 360minutes ，其中要听40分钟以上的的洗脑音频。",
        daily2: "穿上可爱的内衣、可爱的衣服、高跟鞋、化妆、戴上假发(长发)，保持 240minutes 。",
        exam1: "今天穿可爱的内衣和可爱的衣服保持 1440minutes ，其中要听60分钟以上的的洗脑音频。",
        exam2: "刮掉全身的体毛，穿可爱的内衣，可爱的衣服，高跟鞋，化妆和假发(长发)保持 720minutes 。",
        tags: "feminization"
      },
      105: {
        id: "105",
        imgUrl: "#",
        type: "class",
        name: "口技训练 105",
        name2: "嘴穴",
        prerequisites: "",
        days: "1 3 5",
        description: "你将学会如何用嘴取悦老二。",
        tier: "beginner",
        daily1: "给假阳具(S码)口交 5minutes 。",
        daily2: "用假阳具(S码)深喉（吞进去10cm以上） 5times 。",
        exam1: "给假阳具(S码)口交 10minutes 。",
        exam2: "用假阳具(S码)深喉（吞进去10cm以上）  10times 。",
        tags: "penetration"
      },
      305: {
        id: "305",
        imgUrl: "#",
        type: "class",
        name: "进阶口交课程 305",
        name2: "嘴穴",
        prerequisites: "105",
        days: "1 3 5",
        description: "你将学习如何正确的深喉。",
        tier: "advanced",
        daily1: "给假阳具(M码)口交 10minutes 。",
        daily2: "用假阳具(M码)深喉（吞进去15cm以上）  10times ，每次在喉咙内至少保持3秒。",
        exam1: "给假阳具(M码)口交 15minutes 。",
        exam2: "用假阳具(M码)深喉（吞进去15cm以上）  20times ，最后两次在喉咙内至少保持6秒。",
        tags: "penetration"
      },
      405: {
        id: "405",
        imgUrl: "#",
        type: "class",
        name: "高级深喉课程 405",
        name2: "嘴穴",
        prerequisites: "305",
        days: "1 3 5",
        description: "你将会习惯被人侵犯口腔，并从中获得快感。",
        tier: "master",
        daily1: "用假阳具(L码)一口气深喉（吞进去19cm以上）一口气  20times ，保持假阳具在口腔内，不得完全吐出。",
        daily2: "用假阳具(L码)深喉（吞进去19cm以上）保持5秒，做 5times 。",
        exam1: "用假阳具(L码)一口气深喉（吞进去19cm以上）一口气  30times ，保持假阳具在口腔内，不得完全吐出。",
        exam2: "用假阳具(L码)深喉（吞进去19cm以上）保持8秒，做 10times 。",
        tags: "penetration"
      },
      106: {
        id: "106",
        imgUrl: "#",
        type: "class",
        name: "入门精液Play 106",
        name2: "精液play",
        prerequisites: "",
        days: "1 3",
        description: "你将学会用你的精液玩一些好玩的事情。",
        tier: "beginner",
        daily1: "舔掉你其他活动留下的任何精液（包括前列腺液）。",
        daily2: "给自己做个带有精液的面部护理(真精液或假精液)。",
        exam1: "做一个精液饮品，并且喝干净(真精液或假精液)。",
        exam2: "使用精液(真精液或假精液)作为你的口交或肛交的润滑油。",
        tags: "fluid"
      },
      306: {
        id: "306",
        imgUrl: "#",
        type: "class",
        name: "精液艺术鉴赏 306",
        name2: "精液play",
        prerequisites: "106",
        days: "1 3",
        description: "你将学会享受精液。",
        tier: "advanced",
        daily1: "用精液做面部护理(真精液或假精液)。",
        daily2: "使用精液(真精液或假精液)作为你的口交或肛交的润滑油。",
        exam1: "使用精液(真精液或假精液)作为你日常活动的润滑剂。 在你完成后，喝一杯精液(真精液或假精液)",
        exam2: "把精液(真精液或假精液)装入没有封口的避孕套中，之后放在你的嘴里保持5分钟。",
        tags: "fluid"
      },
      406: {
        id: "406",
        imgUrl: "#",
        type: "class",
        name: "精液上瘾 406",
        name2: "精液play",
        prerequisites: "306",
        days: "1 3 5",
        description: "精液将是你最美味的食物。",
        tier: "master",
        daily1: "喝一杯(真精液或假精液)。",
        daily2: "使用(真精液或假精液)作为你所有日常活动的润滑剂。",
        exam1: "喝一杯(真精液或假精液)，然后使用(真精液或假精液)作为你所有日常活动的润滑剂，完成后再喝一杯(真精液或假精液).",
        exam2: "用你自己的精液给自己做 20minutes 的面部护理，同时再喝一杯(真精液或假精液)。",
        tags: "fluid"
      },
      107: {
        id: "107",
        imgUrl: "#",
        type: "class",
        name: "开苞课程 107",
        name2: "仅限女性",
        prerequisites: "",
        days: "1 3 5",
        description: "你会学会和你的小穴一起做愉快的事情。(仅限女性的课程)",
        tier: "beginner",
        daily1: "用假阳具（S码）操你的小穴 5minutes 。",
        daily2: "在你的小穴里插入一个假阳具(S码)保持 10minutes 。",
        exam1: "用假阳具（S码）操你的小穴 10minutes 。",
        exam2: "在你的小穴里插入一个假阳具(S码)保持 15minutes 。",
        tags: "female"
      },
      207: {
        id: "207",
        imgUrl: "#",
        type: "class",
        name: "小穴扩张训练 207",
        name2: "仅限女性",
        prerequisites: "107",
        days: "1 3 5",
        description: "你会把你那肮脏的小穴给撑开·，方便客人进入。(仅限女性的课程)",
        tier: "intermediate",
        daily1: "用假阳具（S码）操你的小穴 10minutes 。",
        daily2: "在你的小穴里插入一个假阳具(M码)保持 15minutes 。",
        exam1: "用假阳具（M码）操你的小穴 10minutes 。",
        exam2: "在你的小穴里插入一个假阳具(L码)保持 15minutes 。",
        tags: "female"
      },
      307: {
        id: "307",
        imgUrl: "#",
        type: "class",
        name: "女性特殊职业培训 307",
        name2: "仅限女性",
        prerequisites: "207 215",
        days: "2 4",
        description: "你将会学习如何用小穴来工作。(仅限女性的课程)",
        tier: "advanced",
        daily1: "用假阳具（M码）操你的小穴 15minutes 。",
        daily2: "用假阳具（L码）操你的小穴 10minutes 。",
        exam1: "用假阳具（M码）操你的小穴 30minutes 。",
        exam2: "用假阳具（L码）操你的小穴 20minutes 。",
        tags: "female"
      },
      407: {
        id: "407",
        imgUrl: "#",
        type: "class",
        name: "男女平等 407",
        name2: "仅限女性",
        prerequisites: "307",
        days: "2 4",
        description: "你将体验到性的力量和解放。(仅限女性的课程)",
        tier: "master",
        daily1: "用假阳具（M码）操你的菊穴 30minutes 。",
        daily2: "用假阳具（L码）操你的菊穴 20minutes 。",
        exam1: "用假阳具（L码）操你的菊穴 60minutes 。",
        exam2: "用假阳具（XL码）操你的菊穴 40minutes 。",
        tags: "female"
      },
      118: {
        id: "118",
        imgUrl: "#",
        type: "class",
        name: "特殊服装体验 118",
        name2: "特殊服装",
        prerequisites: "",
        days: "2 3 4",
        description: "你将学习使用奇异的材料所制作的衣物或道具，如乳胶，皮革，PVC和乙烯基。(服装信息见“帮助”中的“其他”)",
        tier: "beginner",
        daily1: "穿一件特殊服装 120minutes 。",
        daily2: "穿两件特殊服装60minutes 。",
        exam1: "穿一件特殊服装 180minutes 。",
        exam2: "穿两件特殊服装 120minutes 。",
        tags: "fetish"
      },
      218: {
        id: "218",
        imgUrl: "#",
        type: "class",
        name: "特殊服装试穿 218",
        name2: "特殊服装",
        prerequisites: "118",
        days: "2 3 4",
        description: "你穿上奇异的材料所制作的衣物或道具，如乳胶，皮革，PVC和乙烯基。(服装信息见“帮助”中的“其他”)",
        tier: "intermediate",
        daily1: "穿两件特殊服装 120minutes 。",
        daily2: "穿三件特殊服装 60minutes 。",
        exam1: "穿三件特殊服装 120minutes 。",
        exam2: "穿四件特殊服装 60minutes 。",
        tags: "fetish"
      },
      318: {
        id: "318",
        imgUrl: "#",
        type: "class",
        name: "特殊服装研究 318",
        name2: "特殊服装",
        prerequisites: "218",
        days: "1 3 4",
        description: "你将开始探索特殊服装的世界。(紧身内衣也算)(服装信息见“帮助”中的“其他”)",
        tier: "advanced",
        daily1: "穿四件特殊服装 120minutes 。",
        daily2: "穿女式紧身连衣裤（紧身衣裤） 120minutes 。",
        exam1: "穿四件特殊服装 240minutes 。",
        exam2: "穿女式紧身连衣裤（紧身衣裤） 180minutes 。",
        tags: "fetish"
      },
      418: {
        id: "418",
        imgUrl: "#",
        type: "class",
        name: "特殊服装大师 418",
        name2: "特殊服装",
        prerequisites: "318",
        days: "2 3 4",
        description: "你开始崇拜特殊服装。(服装信息见“帮助”中的“其他”)",
        tier: "master",
        daily1: "穿四件特殊服装或一件紧身衣裤 180minutes ",
        daily2: "穿女式紧身连衣裤（紧身衣裤）和一个乳胶面罩/头罩 120minutes 。",
        exam1: "穿四件特殊服装或一件紧身衣裤 240minutes ",
        exam2: "穿女式紧身连衣裤（紧身衣裤）和一个乳胶面罩/头罩 180minutes 。",
        tags: "fetish"
      },
      209: {
        id: "209",
        imgUrl: "#",
        type: "class",
        name: "高潮训练 209",
        name2: "高潮",
        prerequisites: "",
        days: "6 0",
        description: "你将学会多次高潮。(只有周末才上课)",
        tier: "intermediate",
        daily1: "今天高潮 1times ，在射精后继续刺激15秒。",
        daily2: "今天高潮 2times 。",
        exam1: "今天高潮 1times ，在高潮后继续刺激30秒。",
        exam2: "今天高潮 3times 。",
        tags: "orgasm"
      },
      309: {
        id: "309",
        imgUrl: "#",
        type: "class",
        name: "强制性高潮课程 309",
        name2: "高潮",
        prerequisites: "209",
        days: "6 0",
        description: "你将被迫多次高潮。(只有周末才上课)",
        tier: "advanced",
        daily1: "今天高潮 2times ，在高潮后继续刺激30秒。",
        daily2: "在30分钟内高潮 2times 。",
        exam1: "今天高潮 2times ，在高潮后继续刺激60秒。",
        exam2: "在45分钟内高潮 3times 。",
        tags: "orgasm"
      },
      409: {
        id: "409",
        imgUrl: "#",
        type: "class",
        name: "高潮折磨研究 409",
        name2: "高潮",
        prerequisites: "309",
        days: "6 0",
        description: "你会被迫违背自己的意愿去高潮。(只有周末才上课)",
        tier: "master",
        daily1: "今天高潮 2times ，在高潮后继续刺激 1minutes 。",
        daily2: "在45分钟内高潮 3times 。",
        exam1: "今天高潮 2times ，在高潮后继续刺激 2minutes 。",
        exam2: "在60分钟内高潮 4times 。",
        tags: "orgasm"
      },
      213: {
        id: "213",
        imgUrl: "#",
        type: "class",
        name: "寸止训练 113",
        name2: "寸止",
        prerequisites: "",
        days: "1 3 4",
        description: "你将学会抑制你的高潮。(如果你被锁在贞操（笼/带）里，解锁完成任务。结束别忘了锁好自己)",
        tier: "beginner",
        daily1: "手淫 10minutes 。",
        daily2: "寸止 2times 。",
        exam1: "手淫 20minutes 。",
        exam2: "寸止 4times 。",
        tags: "orgasm"
      },
      313: {
        id: "313",
        imgUrl: "#",
        type: "class",
        name: "进阶寸止课程 313",
        name2: "寸止",
        prerequisites: "213",
        days: "1 2 3 4",
        description: "你将学会保持在射精边缘，拒绝让精液流出。(如果你被锁在贞操（笼/带）里，解锁完成任务。结束别忘了锁好自己)",
        tier: "advanced",
        daily1: "手淫 20minutes 和寸止 2times ，今天禁止高潮。",
        daily2: "寸止 3times ，今天禁止高潮。",
        exam1: "手淫 30minutes 和寸止 4times ，今天禁止高潮。",
        exam2: "寸止 5times ，今天禁止高潮。",
        tags: "orgasm"
      },
      413: {
        id: "413",
        imgUrl: "#",
        type: "class",
        name: "大师级寸止研究 413",
        name2: "寸止",
        prerequisites: "313",
        days: "1 2 3 4",
        description: "你的高潮将永远无法来到。(如果你被锁在贞操（笼/带）里，解锁完成任务。结束别忘了锁好自己)",
        tier: "master",
        daily1: "手淫 30minutes 和寸止 3times ，今天禁止高潮。",
        daily2: "寸止 4times ，今天禁止高潮。",
        exam1: "手淫 45minutes 和寸止 6times ，今天禁止高潮。",
        exam2: "寸止 8times ，今天禁止高潮。",
        tags: "orgasm"
      },
      211: {
        id: "211",
        imgUrl: "#",
        type: "class",
        name: "前列腺训练 211",
        name2: "菊穴",
        prerequisites: "102",
        days: "1 4",
        description: "你将学会如何从前列腺中获得快感。",
        tier: "intermediate",
        daily1: "瞄准你的前列腺用假阳具(M码)操自己 10minutes 。",
        daily2: "瞄准你的前列腺用假阳具(M码)操自己，直到你下面开始流水。",
        exam1: "瞄准你的前列腺用假阳具(M码)操自己 20minutes 。",
        exam2: "瞄准你的前列腺用假阳具(M码)操自己，直到你下面开始流水，在操10minutes。",
        tags: "penetration"
      },
      311: {
        id: "311",
        imgUrl: "#",
        type: "class",
        name: "前列腺高潮训练 311",
        name2: "菊穴",
        prerequisites: "211",
        days: "1 4",
        description: "你将学会如何用你的前列腺来高潮。",
        tier: "advanced",
        daily1: "用跳蛋或前列腺按摩器给你的前列腺按摩 30minutes 。",
        daily2: "用跳蛋或前列腺按摩器给你的前列腺按摩，直到你下面开始流水，再按摩 10minutes 。",
        exam1: "用跳蛋或前列腺按摩器给你的前列腺按摩 60minutes 。",
        exam2: "用跳蛋或前列腺按摩器给你的前列腺按摩，直到你高潮。",
        tags: "penetration"
      },
      212: {
        id: "212",
        imgUrl: "#",
        type: "class",
        name: "肛塞训练 212",
        name2: "菊穴",
        prerequisites: "102",
        days: "1 3",
        description: "你会学习如何扩展你屁眼的视野。",
        tier: "intermediate",
        daily1: "佩戴肛塞(S码) 90minutes 。",
        daily2: "佩戴肛塞(M码) 60minutes 。",
        exam1: "佩戴肛塞(S码) 180minutes 。",
        exam2: "佩戴肛塞(M码) 120minutes 。",
        tags: "penetration"
      },
      312: {
        id: "312",
        imgUrl: "#",
        type: "class",
        name: "肛门扩张训练 312",
        name2: "菊穴",
        prerequisites: "212",
        days: "1 3",
        description: "你将用一个更大的肛塞来扩大你屁眼的视野。",
        tier: "advanced",
        daily1: "佩戴肛塞(M码) 180minutes 。",
        daily2: "佩戴肛塞(L码) 120minutes 。",
        exam1: "佩戴肛塞(L码) 240minutes 。",
        exam2: "佩戴肛塞(XL码) 180minutes 。",
        tags: "penetration"
      },
      214: {
        id: "214",
        imgUrl: "#",
        type: "class",
        name: "自缚训练 214",
        name2: "奴隶",
        prerequisites: "",
        days: "3 4",
        description: "你将学习自缚的基本知识。",
        tier: "intermediate",
        daily1: "把双腿绑在一起 20minutes 。",
        daily2: "把双手绑在一起 20minutes 。",
        exam1: "把双腿和双手分别绑在一起 30minutes 。",
        exam2: "把你自己自缚成四蹄倒攒/莲花捆绑/青蛙捆绑/木乃伊捆绑任意一种 15minutes 。(捆绑信息见“帮助”中的“其他”)",
        tags: "slave"
      },
      314: {
        id: "314",
        imgUrl: "#",
        type: "class",
        name: "高级捆绑课程 314",
        name2: "奴隶",
        prerequisites: "214",
        days: "2 4",
        description: "你将学会忍受痛苦和惩罚。",
        tier: "advanced",
        daily1: "将晾衣夹夹在乳头上 5minutes ，然后拍打屁股两侧各 20times 。",
        daily2: "把你自己自缚成四蹄倒攒/莲花捆绑/青蛙捆绑/木乃伊捆绑任意一种 15minutes 。(捆绑信息见“帮助”中的“其他”)",
        exam1: "将晾衣夹夹在乳头上 10minutes ，然后拍打屁股两侧各 40times 。",
        exam2: "把你自己自缚成四蹄倒攒/莲花捆绑/青蛙捆绑/木乃伊捆绑任意一种 15minutes ，并且佩戴眼罩和口塞。(捆绑信息见“帮助”中的“其他”)",
        tags: "slave"
      },
      414: {
        id: "414",
        imgUrl: "#",
        type: "class",
        name: "受虐狂培养计划 414",
        name2: "奴隶",
        prerequisites: "314",
        days: "2 3",
        description: "受虐可能对你来说是一种享受",
        tier: "master",
        daily1: "把晾衣夹夹在乳头上 10minutes ，拍打屁股两侧各30下，最后拍打你的蛋蛋/阴部 5times 。",
        daily2: "把你自己自缚成四蹄倒攒/莲花捆绑/青蛙捆绑/木乃伊捆绑任意一种 20minutes ，并且佩戴眼罩和口塞。(捆绑信息见“帮助”中的“其他”)",
        exam1: "把晾衣夹夹在乳头上，然后把你自己自缚成四蹄倒攒/莲花捆绑/青蛙捆绑/木乃伊捆绑任意一种15minutes ，并且佩戴眼罩和口塞。(捆绑信息见“帮助”中的“其他”)",
        exam2: "佩戴口塞，把晾衣夹夹在乳头上，用一个物体在你的屁股两侧各用力打30下，然后拍打你的蛋蛋/阴部10下。",
        tags: "slave"
      },
      215: {
        id: "215",
        imgUrl: "#",
        type: "class",
        name: "性爱训练 215",
        name2: "嘴穴 菊穴",
        prerequisites: "102 105",
        days: "2 4",
        description: "是时候测试一下你口交和肛交的技巧了。",
        tier: "intermediate",
        daily1: "用两个假阳具(S码和M码)同时贯穿你的双穴(嘴穴和菊穴) 8minutes 。",
        daily2: "用假阳具(M码)操你自己的菊穴 5minutes ，然后再给它做5分钟的口交。",
        exam1: "用两个假阳具(S码和M码)同时贯穿你的双穴(嘴穴和菊穴) 15minutes 。",
        exam2: "用假阳具(M码)操你自己的菊穴 10minutes ，然后再给它做 5minutes 的口交。",
        tags: "penetration"
      },
      415: {
        id: "415",
        imgUrl: "#",
        type: "class",
        name: "轮奸课程 415",
        name2: "嘴穴 菊穴",
        prerequisites: "215 302 305",
        days: "2 4",
        description: "你将被训练一次用多个玩具插入你的洞中。",
        tier: "master",
        daily1: "用两个假阳具(L码和M码)同时贯穿你的双穴(嘴穴和菊穴) 15minutes 。",
        daily2: "用假阳具(L码)操你自己的菊穴 10minutes ，把它放在里面，然后再拿一个假阳具(M码)做至少10个深喉。",
        exam1: "用两个假阳具(L码和M码)同时贯穿你的双穴(嘴穴和菊穴) 25minutes 。",
        exam2: "用假阳具(L码)操你自己的菊穴 10minutes ，然后再给它做 10minutes 的口交和至少 30times 的深喉。",
        tags: "anal oral"
      },
      216: {
        id: "216",
        imgUrl: "#",
        type: "class",
        name: "入门露出训练 216",
        name2: "露出",
        prerequisites: "",
        days: "1 4",
        description: "你会克服你的羞怯。",
        tier: "intermediate",
        daily1: "开着窗户执行一个日常任务。",
        daily2: "告诉沙雕推友们你的日常活动进展如何，这可以是博客聊天室或推特。",
        exam1: "穿着其他课程的道具(贞操笼、肛塞、假阳具等)出门，这些道具可以藏在衣服下面。",
        exam2: "在执行日常任务时拍照并与沙雕推友们分享(聊天或发推)",
        tags: "humiliation"
      },
      316: {
        id: "316",
        imgUrl: "#",
        type: "class",
        name: "户外露出训练 316",
        name2: "露出",
        prerequisites: "216",
        days: "1 4",
        description: "是时候出柜（men）了。",
        tier: "advanced",
        daily1: "穿着其他课程的道具(贞操笼、肛塞、假阳具等)出门，这些道具可以藏在衣服下面。",
        daily2: "在执行日常任务时拍照并与沙雕推友们分享(聊天或发推)ヽ✿゜▽゜)ノ .",
        exam1: "走到户外，拍一张你穿着其他课程的道具(贞操笼、肛塞、假阳具等)照片，可在半公共场所(公共场所、更衣室等)拍摄，然后和沙雕推友们分享此照片。(聊天或发帖)",
        exam2: "录下自己在其他任务过程的5分钟视频，并公开分享。",
        tags: "humiliation"
      },
      416: {
        id: "416",
        imgUrl: "#",
        type: "class",
        name: "大师级露出调教 416",
        name2: "露出",
        prerequisites: "316",
        days: "1 4",
        description: "你完全克服了羞耻感。",
        tier: "master",
        daily1: "走到户外，拍一张你穿着其他课程的道具(贞操笼、肛塞、假阳具等)照片，必须在半公共场所(公共场所、更衣室等)拍摄，然后和沙雕推友们分享此照片。(聊天或发帖)",
        daily2: "录下自己在其他任务过程的5分钟视频，并公开分享。",
        exam1: "走出去，拍一张你穿着其他课程的道具(贞操笼、肛塞、假阳具等)照片，必须在公共场所(公园、街道等)地方拍摄。然后你懂的！",
        exam2: "实时分享你的任务过程，并公开分享。(至少10分钟)",
        tags: "humiliation"
      },
      217: {
        id: "217",
        imgUrl: "#",
        type: "class",
        name: "宠物训练 117",
        name2: "宠物play",
        prerequisites: "",
        days: "1 4 5",
        description: "你将开始探索宠物的生活方式。",
        tier: "beginner",
        daily1: "今天你要戴上动物耳朵和项圈 60minutes 。",
        daily2: "今天你要戴上动物耳朵、项圈和尾巴 30minutes 。",
        exam1: "今天你要戴上动物耳朵、项圈和尾巴 60minutes 。",
        exam2: "今天你要戴上动物耳朵、项圈和尾巴 30minutes ，并且只能用四肢着地走路。",
        tags: "pet"
      },
      317: {
        id: "317",
        imgUrl: "#",
        type: "class",
        name: "家犬训练 317",
        name2: "宠物play",
        prerequisites: "217",
        days: "2 4",
        description: "你会学着像宠物一样。",
        tier: "advanced",
        daily1: "今天你要戴上动物耳朵、项圈和尾巴 60minutes 。",
        daily2: "今天你要戴上动物耳朵、项圈和尾巴 30minutes ，并且只能用四肢着地走路。",
        exam1: "今天你要戴上动物耳朵、项圈和尾巴 120minutes 。",
        exam2: "今天你要戴上动物耳朵、项圈和尾巴60分钟，并且只能用四肢着地走路，和从地板上的碗里吃喝。",
        tags: "pet"
      },
      417: {
        id: "417",
        imgUrl: "#",
        type: "class",
        name: "母畜课程 417",
        name2: "宠物play",
        prerequisites: "317",
        days: "2 4",
        description: "你将成为人类的宠物。",
        tier: "master",
        daily1: "今天你要戴上动物耳朵、项圈和尾巴 60minutes 。并且只能用四肢着地走路，和从地板上的碗里吃喝。",
        daily2: "今天你要戴上动物耳朵、项圈和带尾巴的肛塞 30minutes 。并且把自己绑成bitchsuit的模样(捆绑信息见“帮助”中的“其他”)。",
        exam1: "今天你要戴上动物耳朵、项圈和尾巴 120minutes 。并且只能用四肢着地走路，和从地板上的碗里吃喝。",
        exam2: "今天你要戴上动物耳朵、项圈和带尾巴的肛塞 60minutes 。并且把自己绑成bitchsuit的模样(捆绑信息见“帮助”中的“其他”)。",
        tags: "pet"
      },
      220: {
        id: "220",
        imgUrl: "#",
        type: "class",
        name: "顺从训练 220",
        name2: "奴隶",
        prerequisites: "",
        days: "2 3",
        description: "你将学会顺从是最好的表现。",
        tier: "intermediate",
        daily1: "随机 1times 轻型处分。",
        daily2: "在聊天室/TG或推特上请求任务 1times 。",
        exam1: "随机 2times 轻型处分。",
        exam2: "在聊天室/TG或推特上请求任务 2times 。",
        tags: "slave"
      },
      320: {
        id: "320",
        imgUrl: "#",
        type: "class",
        name: "服从调教课程 320",
        name2: "奴隶",
        prerequisites: "220",
        days: "2 3",
        description: "服从的命令将会取悦主人。",
        tier: "advanced",
        daily1: "随机 2times 轻型处分。",
        daily2: "在聊天室/TG或推特上请求任务 2times 。",
        exam1: "随机 1times 重型处分。",
        exam2: "在聊天室/TG或推特上请求任务 3times 。",
        tags: "slave"
      },
      420: {
        id: "420",
        imgUrl: "#",
        type: "class",
        name: "奴化课程 420",
        name2: "奴隶",
        prerequisites: "320",
        days: "2 3 4",
        description: "你将学会服从主人的命令.",
        tier: "master",
        daily1: "随机 1times 重型处分和 1times 轻型处分。",
        daily2: "在聊天室/TG或推特上请求难度系数较高任务 3times 。",
        exam1: "随机 1times 重型处分和 2times 轻型处分。",
        exam2: "在聊天室/TG或推特上请求难度系数较高任务 4times 。",
        tags: "slave"
      }
    };
  }
  static get majorsData() {
    return {
      1: {
        id: "1",
        imgUrl: "#",
        type: "major",
        name: "肛门工程学",
        name2: "菊穴",
        prerequisites: "311 312 402",
        description: "你将从肛交中获得不一样的乐趣和高潮！",
        tier: "major",
        daily1: "无",
        daily2: "无",
        exam1: "佩戴肛塞(XL码)4小时，然后用假阳具(XL码)操自己的菊穴 40minutes ，直到你获得高潮。",
        exam2: "佩戴肛塞(L码) 1440minutes 。",
        exam3: "在 1440minutes 内用假阳具(XL码)操自己的菊穴，让自己获得 2times （前列腺/菊穴）高潮。",
        tags: "anal"
      },
      2: {
        id: "2",
        imgUrl: "#",
        type: "major",
        name: "性别研究学",
        name2: "贞操 女性化",
        prerequisites: "403 404",
        description: "你将控制你的性别，在所有方面成为一个女人，除了一个地方。",
        tier: "major",
        daily1: "无",
        daily2: "无",
        exam1: "穿着可爱的内衣，佩戴 20160minutes 的贞操（笼/带），你只能获得（前列腺/菊穴）高潮。",
        exam2: "穿着可爱的内衣，确保你的胯部和腋窝被刮干净，佩戴 10080minutes 的贞操（笼/带），每天至少穿一件可爱的衣服(裙子/连衣裙/连裤袜/长袜/高跟鞋等)至少4小时(可以藏在正常衣服下面)，你只能获得（前列腺/菊穴）高潮。",
        exam3: "佩戴 2880minutes 的贞操（笼/带），确保你的全身刮得很光滑，之后需要打扮得像个女孩——从内衣、化妆品、指甲、假发(长发)和可爱的衣服，每天至少（前列腺/菊穴）高潮 1times 。",
        tags: "feminization chastity"
      },
      3: {
        id: "3",
        imgUrl: "#",
        type: "major",
        name: "欲望管理学",
        name2: "贞操 寸止",
        prerequisites: "403 413",
        description: "你将研究无法高潮对人类心理的影响。",
        tier: "major",
        daily1: "无",
        daily2: "无",
        exam1: "佩戴 20160minutes 的贞操（笼/带）和每天寸止 1times 。如果你高潮了，将增加4天佩戴时间(和随机一个处分)。",
        exam2: "佩戴 14400minutes 的贞操（笼/带）和每天寸止 2times 。如果你高潮了，将增加4天佩戴时间(和随机一个处分)。**但是在你接下来的日子里也要保持贞操佩戴。**",
        exam3: "佩戴 10080minutes 的贞操（笼/带）和每天寸止 3times 。如果你高潮了，将增加2天佩戴时间(和随机一个处分)。**但是在你接下来的日子里也要保持贞操佩戴。**",
        tags: "chastity masturbation"
      },
      5: {
        id: "5",
        imgUrl: "#",
        type: "major",
        name: "液体研究学",
        name2: "灌肠和尿play",
        prerequisites: "401",
        description: "你会掌握大师级灌肠和尿play。",
        tier: "major",
        daily1: "无",
        daily2: "无",
        exam1: "灌入1500ml液体(任何液体)保持 15minutes 。",
        exam2: "灌入1000ml液体(任何液体)保持 10minutes ，同时喝至少200毫升的小便。",
        exam3: "在灌肠袋(容器)中灌满600ml尿，然后将灌肠管送入口中。慢慢地喝完。(如果你把自己绑起来，佩戴口塞，你可以用400毫升小便)",
        tags: "fluid"
      },
      6: {
        id: "6",
        imgUrl: "#",
        type: "major",
        name: "公共关系学",
        name2: "露出 奴隶",
        prerequisites: "416 420",
        description: "你将为大众服务。",
        tier: "major",
        daily1: "无",
        daily2: "无",
        exam1: "去推特或聊天室发言，要求完成10个网友让你做的任务。同时拍照/录像记录过程，并与他人分享。",
        exam2: "色情直播 60minutes ，并在直播过程中执行别人要求的任何性行为。",
        exam3: "户外露出 30minutes ，至少佩戴5个其他课程的道具。例如:完全装扮成女孩和穿着乳胶衣 / 戴着尾巴、动物耳朵和项圈 / 戴着贞操笼、肛塞和跳蛋 / 身上绑着绳衣、乳头夹和项圈/等等",
        tags: "exhibitionism"
      },
      7: {
        id: "7",
        imgUrl: "#",
        type: "major",
        name: "肉便器学",
        name2: "菊穴, 嘴穴, 轮奸",
        prerequisites: "415 ",
        description: "你将学会利用你所有的洞让客人们享受到快乐。",
        tier: "major",
        daily1: "无",
        daily2: "无",
        exam1: "用两个阳具(L码和XL码)同时贯穿你的双穴(嘴穴和菊穴) 30minutes 。",
        exam2: "用假阳具(XL码)操你自己的菊穴 20minutes ，同时给另一个假阳具(L码)口交 15minutes ，至少做50个深喉。",
        exam3: "在你的菊穴里插入一个假阳具(XL码)，然后深喉另一个假阳具(L码)5秒，做 15times 。",
        tags: "anal oral"
      },
      8: {
        id: "8",
        imgUrl: "#",
        type: "major",
        name: "宠物研究学",
        name2: "宠物play",
        prerequisites: "417",
        days: "1 2 3 4 5 6 7",
        description: "你喜欢宠物吗？很棒，现在你将被改造成一只听话的宠物！",
        tier: "major",
        daily1: "无",
        daily2: "无",
        exam1: "你要佩戴动物耳朵、项圈和尾巴，从地板上的碗里吃喝，使用四肢着地走路，睡在笼子里。保持 1440minutes 小时，并且你有四次休息机会，每次30分钟。",
        exam2: "配搭动物耳朵，项圈和带肛塞的尾巴，并且要把自己绑成bitchsuit的样子。保持 240minutes 。",
        exam3: "把你的性爱玩具或其他物品(至少20件)摆放在你的公寓里，必须要让你在爬行时很容易就能拿到它们。佩戴动物耳朵和带肛塞的尾巴，把自己束缚成bitchsuit的样子，开始用四肢爬行一个一个地收集你的玩具，用你的嘴把它们放在你的初始地方。当所有的玩具都集中在一起时，你就完成任务了，限时 180minutes 。",
        tags: "pet"
      },
      9: {
        id: "9",
        imgUrl: "#",
        type: "major",
        name: "特殊服装管理学",
        name2: "特殊服装",
        prerequisites: "418",
        description: "您将探索各种特殊服装，如乳胶，皮革，PVC和乙烯基。",
        tier: "major",
        daily1: "无",
        daily2: "无",
        exam1: "穿四件特殊服装或一件紧身衣裤 1440minutes 。",
        exam2: "穿一套由乳胶/皮革/pvc或乙烯基制成的全套紧身衣(连体衣)保持 720minutes 。",
        exam3: "穿一套完整的紧身衣(连身衣)，戴上由乳胶/皮革/pvc或乙烯基制成的兜帽/口罩保持 360minutes ",
        tags: "fetish"
      },
      11: {
        id: "11",
        imgUrl: "#",
        type: "major",
        name: "强制榨精研究学",
        name2: "强制高潮，寸止和高潮后折磨",
        prerequisites: "409 413",
        description: "你将研究长期高潮折磨的影响。",
        tier: "major",
        daily1: "无",
        daily2: "无",
        exam1: "手淫达到高潮后，持续 5minutes 的所有刺激。",
        exam2: "手淫达到高潮后，继续所有的刺激直到你再次高潮。",
        exam3: "在 10080minutes 时间内每天寸止 3times ，不能射精。并在最后一天射精 5times 。",
        tags: "orgasm"
      },
      12: {
        id: "12",
        imgUrl: "#",
        type: "major",
        name: "口交工程学",
        name2: "嘴穴, 精液play",
        prerequisites: "405 406",
        description: "你会变得熟练地取悦大鸡巴和用你的嘴穴吞下大量的精液。",
        tier: "major",
        daily1: "无",
        daily2: "无",
        exam1: "给假阳具(L码)做 45minutes 口交，用精液(真精液或假精液)做润滑剂，每5分钟重新涂抹一次。",
        exam2: "深喉(23厘米)假阳具(XL码)一口气40下。在你完成上一步骤深喉后，再用假阳具深喉保持6秒，做 10times 。",
        exam3: "使用可以射精的假阴茎(L码)口交 15minutes ，至少30个深喉(插入19厘米)。在你的最后一个深喉，将假阳具插入最深处，并射入50毫升假精液到你的喉咙。",
        tags: "oral"
      },
      13: {
        id: "13",
        imgUrl: "#",
        type: "major",
        name: "性奴研究学",
        name2: "捆绑、受虐和服从",
        prerequisites: "414 420",
        description: "你将成为一个从痛苦中获得快乐的性奴。",
        tier: "major",
        daily1: "无",
        daily2: "无",
        exam1: "佩戴口塞。用晒衣架做一个身体拉链，从你的一个乳房夹到你的肚脐，再夹回到另一个乳房(至少20个晒衣架)。然后用晒衣架打你的屁股，直到它变成红色(至少 50times )。然后使劲用衣架打掉你身上的拉链。",
        exam2: "将晒衣夹系在乳头上，在屁股上插入一个肛塞/跳蛋/假阳具。把你自己自缚成四蹄倒攒/莲花捆绑/青蛙捆绑/木乃伊捆绑任意一种 60minutes ，并且佩戴眼罩和口塞。",
        exam3: "使用聊天室或推特，向所有人乞求10个奴隶任务，其中最好包括奴役和痛苦。每拒绝一项任务，就狠狠地打你的屁股 20times 和打你的蛋蛋/阴部 10times 。",
        tags: "slave"
      }
    };
  }
  static get partnersData() {
    return {
      1: {
        id: "1",
        imgUrl: "#",
        type: "partner",
        name: "佐伊",
        name2: "肛交、口交",
        tier: "1",
        description: "佐伊是这所大学二年级调教师专业的学生，因此她需要为她的口交和肛交课程挑选一个姬友。幸运的是，她已经注意到了你，并希望你在今年余下的时间里成为她的性玩具。",
        job1: "你的所有使用嘴穴和菊穴课程任务的要求提高25%。",
        perk1: "使用嘴穴和菊穴课程任务会给你额外的1学分。",
        job2: "你的所有使用嘴穴和菊穴课程任务的要求提高25%。",
        perk2: "使用嘴穴和菊穴课程任务会给你额外的1学分。",
        tags: "penetration"
      },
      2: {
        id: "2",
        imgUrl: "#",
        type: "partner",
        name: "艾米",
        name2: "女性化",
        tier: "1",
        description: "艾米是调教师学三年级的学生，她讨厌任何男性的东西。因此，她喜欢让你穿上她的服装，让你看起来尽可能可爱。",
        job1: "你的女性化课程任务的要求提高25%",
        perk1: "女性化课程任务会给你额外的1学分。",
        job2: "你的女性化课程任务的要求提高25%",
        perk2: "女性化课程任务会给你额外的1学分。",
        tags: "feminization"
      },
      3: {
        id: "3",
        imgUrl: "#",
        type: "partner",
        name: "夏洛蒂",
        name2: "贞操控制",
        tier: "1",
        description: "夏洛蒂并不是真的在这里学习，她是镇上教堂的一名修女，自愿参加了宗教研究俱乐部。她反对任何形式的性享乐，因为它们是不纯洁的行为，因为她暂时不想让你下地狱，她会永远把你关在贞操里，这样你就不会屈服于诱惑。",
        job1: "你的贞操课程任务的要求提高50%",
        perk1: "贞操课程任务会给你额外的1学分。",
        job2: "你的贞操课程任务的要求提高50%",
        perk2: "贞操课程任务会给你额外的1学分。",
        tags: "chastity"
      },
      4: {
        id: "4",
        imgUrl: "#",
        type: "partner",
        name: "艾娜和劳拉",
        name2: "高潮和寸止",
        tier: "1",
        description: "艾娜和劳拉也被称为“高潮姐妹”，她们是双胞胎，是调教师学的二年级生。虽然他们看起来人畜无害，但你很快就会知道他们为什么会得到这个绰号。",
        job1: "你的寸止和高潮课程任务的要求提高25%",
        perk1: "寸止和高潮课程任务会给你额外的1学分。",
        job2: "你的寸止和高潮课程任务的要求提高25%",
        perk2: "寸止和高潮课程任务会给你额外的1学分。",
        tags: "orgasm"
      },
      5: {
        id: "5",
        imgUrl: "#",
        type: "partner",
        name: "克里斯蒂娜",
        name2: "捆绑、奴役和顺从",
        tier: "1",
        description: "她有时是主人，有时是奴隶，她就是克里斯蒂娜一个双重人格的妹子。她有着丰富的经验，知道如何在奴隶顺从时温柔地照顾他们，也知道当他们不守规矩时如何迅速地惩罚他们。",
        job1: "你的捆绑、奴隶和顺从课程任务的要求提高25%",
        perk1: "捆绑、奴隶和顺从课程任务会给你额外的1学分。",
        job2: "你的捆绑、奴隶和顺从课程任务的要求提高25%",
        perk2: "捆绑、奴隶和顺从课程任务会给你额外的1学分。",
        tags: "slave"
      },
      6: {
        id: "6",
        imgUrl: "#",
        type: "partner",
        name: "瑞葵",
        name2: "灌肠和尿play",
        tier: "1",
        description: "瑞葵是学校的主要护士之一。虽然她很照顾学生，但她和她的同事经常感到无聊，并要求学生长时间来做各种各样的实验。如果你帮她做研究，她会奖励你学分。",
        job1: "你的灌肠和尿play课程任务的要求提高25%",
        perk1: "灌肠和尿play课程任务会给你额外的1学分。",
        job2: "你的灌肠和尿play课程任务的要求提高25%",
        perk2: "灌肠和尿play课程任务会给你额外的1学分。",
        tags: "fluid"
      },
      8: {
        id: "8",
        imgUrl: "#",
        type: "partner",
        name: "妮娜",
        name2: "宠物调教和特殊服装",
        tier: "1",
        description: "妮娜过去两年一直在这所大学专门从事宠物训练和特殊服装的调教。对于任何皮革或乳胶，她都喜欢。她最喜欢的就是把自己的标本紧紧地禁锢住，这样会让她很兴奋。大多数时候你可以在后院找到她，在那里她训练一些有抱负的小马驹女孩。妮娜希望她的宠物能完全服从她，但她非常慷慨和体贴。她甚至会给你做个有你名字的项圈。",
        job1: "你的宠物调教和特殊服装课程任务的要求提高25%",
        perk1: "宠物调教和特殊服装课程任务会给你额外的1学分。",
        job2: "你的宠物调教和特殊服装课程任务的要求提高25%",
        perk2: "宠物调教和特殊服装课程任务会给你额外的1学分。",
        tags: "pet fetish"
      },
      11: {
        id: "11",
        imgUrl: "#",
        type: "partner",
        name: "抖喵酱",
        name2: "全部",
        tier: "1",
        description: "学校最优秀的学生之一，学生会主席——抖喵酱。她突然向你表白，真是令人惊讶，但既然已经发生了，你不能拒绝。她期望你完美无缺，会把你推向极限。",
        job1: "你的所有课程任务的要求提高25%",
        perk1: "所有课程任务会给你额外的1学分。",
        job2: "你的所有课程任务的要求提高25%",
        perk2: "所有课程任务会给你额外的1学分。",
        tags: "all"
      },
      12: {
        id: "12",
        imgUrl: "#",
        type: "partner",
        name: "玛雅",
        name2: "射精轮盘",
        tier: "1",
        description: "玛雅是学生会的副主席，因此她有责任处理所有学生的高潮要求。通常学生每天只能提交一份申请，但既然你是朋友，她会让你再试几次运气，但前提是你能满足她的施虐需求。",
        job1: "你的所有课程任务的要求提高10%",
        perk1: "再Roll一次射精轮盘。(在Roll性高潮轮盘和上课前使用)",
        job2: "你的所有课程任务的要求提高15%",
        perk2: "再Roll一次射精轮盘。(在Roll性高潮轮盘和上课前使用)",
        tags: "justDifficulty"
      },
      1000: {
        id: "1000",
        imgUrl: "#",
        type: "partner",
        name: "索尼娅",
        name2: "保持裸体",
        tier: "1",
        description: ".",
        job1: "你的裸体任务的要求提高25%",
        perk1: "保持裸体课程任务会给你额外的1学分。",
        job2: "你的裸体任务的要求提高25%",
        perk2: "保持裸体课程任务会给你额外的1学分。",
        tags: "nudity",
        community: true
      }
    };
  }
  static get clubsData() {
    return {
      1: {
        id: "1",
        imgUrl: "#",
        type: "club",
        name: "脱衣舞社",
        days: "0",
        tier: "1",
        description: "是时候展示你性感的身体了。",
        perk1: "将所有任务要求降低8%",
        perk2: "将所有任务要求降低8%",
        job1: "做任务或考试时只穿性感内裤和胸罩。",
        job2: "做任务或考试时穿长筒袜和高跟鞋。."
      },
      2: {
        id: "2",
        imgUrl: "#",
        type: "club",
        name: "女仆社",
        days: "0",
        tier: "1",
        description: "让做家务变得有趣！",
        perk1: "将所有任务要求降低16%",
        perk2: "无",
        job1: "做任务或考试时穿著女仆制服。",
        job2: "无"
      },
      3: {
        id: "3",
        imgUrl: "#",
        type: "club",
        name: "广播部",
        days: "0",
        tier: "1",
        description: "我们会帮助你更专注于你的事情。(参见帮助/校规页面的音频和视频部分)",
        perk1: "将所有任务要求降低16%",
        perk2: "无",
        job1: "做任务或考试时听性噪音。",
        job2: "无"
      },
      4: {
        id: "4",
        imgUrl: "#",
        type: "club",
        name: "捆绑俱乐部",
        days: "0",
        tier: "1",
        description: "用一些技巧和技巧使你的课程更有趣。",
        perk1: "将所有任务要求降低8%",
        perk2: "将所有任务要求降低8%",
        job1: "做任务或考试时给自己绑一个基础的龟甲缚。",
        job2: "做任务或考试时要戴手铐和脚铐。."
      },
      5: {
        id: "5",
        imgUrl: "#",
        type: "club",
        name: "束缚俱乐部",
        days: "0",
        tier: "1",
        description: "用各种各样的道具装饰你的课程。",
        perk1: "将所有任务要求降低8%",
        perk2: "将所有任务要求降低8%",
        job1: "做任务或考试时佩戴口塞。",
        job2: "做任务或考试时佩戴眼罩。."
      },
      6: {
        id: "6",
        imgUrl: "#",
        type: "club",
        name: "SM社团",
        days: "0",
        tier: "1",
        description: "探索抖M的世界，可惜你是这儿唯一的抖M。",
        perk1: "将所有任务要求降低8%",
        perk2: "将所有任务要求降低8%",
        job1: "做任务或考试时佩戴乳头夹。",
        job2: "做任务或考试时用绳子绑好你的小鸡鸡和蛋."
      },
      7: {
        id: "7",
        imgUrl: "#",
        type: "club",
        name: "宗教研习会",
        days: "0",
        tier: "1",
        description: "你要保护你的贞操，保护你的屁股。",
        perk1: "将所有任务要求降低8%",
        perk2: "将所有任务要求降低8%",
        job1: "做任务或考试时佩戴贞操（笼/带）。",
        job2: "做任务或考试时佩戴肛塞（M/L码）。."
      },
      8: {
        id: "8",
        imgUrl: "#",
        type: "club",
        name: "Cosplay俱乐部",
        days: "0",
        tier: "1",
        description: "让你成为二次元角色。(您只能激活其中一个选项)",
        perk1: "将所有任务要求降低16%",
        perk2: "将所有任务要求降低16%",
        job1: "做任务或考试时穿日本校服。",
        job2: "做任务或考试时cos任意一个角色。"
      },
      9: {
        id: "9",
        imgUrl: "#",
        type: "club",
        name: "实验社团",
        days: "0",
        tier: "2",
        description: "如果你喜欢尝试新事物，尝试自己，你就来对地方了。",
        perk1: "将所有任务要求降低30%",
        perk2: "获得两张公假条。",
        job1: "Roll一个随机处分。",
        job2: "Roll一个随机处分。"
      },
      10: {
        id: "10",
        imgUrl: "#",
        type: "club",
        name: "精英学生会",
        days: "0",
        tier: "2",
        description: "你是在挑战的顶尖学生吗?成为学校精英中的一员，获得特殊奖励。",
        perk1: "每天减少30%的任务要求",
        perk2: "获得两张公假条。(公家条不得重复使用)",
        job1: "毕业所需学分增加40(增加一次)。",
        job2: "毕业所需学分增加40(增加一次)。"
      },
      11: {
        id: "11",
        imgUrl: "#",
        type: "club",
        name: "科学学会",
        days: "0",
        tier: "2",
        description: "是时候学习一些机械和电力工程了。",
        perk1: "将所有任务要求降低30%",
        perk2: "获得两张公假条。",
        job1: "花10分钟电击你的小鸡鸡/小穴。",
        job2: "用炮机操你10分钟。"
      },
      12: {
        id: "12",
        imgUrl: "#",
        type: "club",
        name: "文学社",
        days: "0",
        tier: "2",
        description: "阅读和写作淫秽小说。",
        perk1: "将所有任务要求降低30%",
        perk2: "获得两张公假条。",
        job1: "写一个关于你的任务和你是一个多么淫荡的短篇故事。在推特或聊天室中分享。",
        job2: "今天阅读20分钟男娘小说（DS.MK里面有）。"
      },
      13: {
        id: "13",
        imgUrl: "#",
        type: "club",
        name: "露出部",
        days: "0",
        tier: "2",
        description: "是时候成为露出狂魔了。",
        perk1: "将所有任务要求降低30%",
        perk2: "获得两张公假条。",
        job1: "做任务或考试时拍照，并与公众分享(通过推特或聊天室)。",
        job2: "做任务或考试时录视频，并与公众分享(通过推特或聊天室)。"
      },
      14: {
        id: "14",
        imgUrl: "#",
        type: "club",
        name: "红十字协会",
        days: "0",
        tier: "2",
        description: "你太娘了，连验血都说明你不适合做男人!",
        perk1: "将所有任务要求降低30%",
        perk2: "获得两张公假条。",
        job1: "喝你的补品(见信息页的补品部分)",
        job2: "确保你的荷尔蒙在女性标准之内。"
      },
      15: {
        id: "15",
        imgUrl: "#",
        type: "club",
        name: "蕾丝边社团",
        days: "0",
        tier: "2",
        description: "可爱的女孩做可爱的事。",
        perk1: "获得两张公假条。",
        perk2: "将所有任务要求降低30%",
        job1: "用穿戴式假阳具操另一个“女孩”。(如果你有小鸡鸡，就必须佩戴贞操笼)",
        job2: "让另一个“女孩”用穿戴式假阳具操你。(如果你有小鸡鸡，就必须佩戴贞操笼)"
      },
      16: {
        id: "16",
        imgUrl: "#",
        type: "club",
        name: "基佬社",
        days: "0",
        tier: "2",
        description: "坏男孩做坏事。太糟糕了，你是个女孩，你得当俱乐部的妓女。",
        perk1: "获得两张公假条。",
        perk2: "将所有任务要求降低30%",
        job1: "给一个真正的男孩/男人口交。",
        job2: "让一个真正的男孩/男人操你。"
      },
      17: {
        id: "17",
        imgUrl: "#",
        type: "club",
        name: "社区服务协会",
        days: "0",
        tier: "2",
        description: "按别人说的去做。",
        perk1: "将所有任务要求降低30%",
        perk2: "获得两张公假条。",
        job1: "在聊天室或推特上请求一个淫荡任务，您可以重新请求最多三次。",
        job2: "在聊天室或推特上请求一个淫荡任务，您可以重新请求最多三次。"
      },
      18: {
        id: "18",
        imgUrl: "#",
        type: "club",
        name: "尿布俱乐部",
        days: "0",
        tier: "1",
        description: "穿尿布",
        perk1: "将所有任务要求降低16%",
        perk2: "无",
        job1: "做任务或考试时穿尿布。",
        job2: "无"
      },
      19: {
        id: "19",
        imgUrl: "#",
        type: "club",
        name: "女孩协会",
        days: "0",
        tier: "1",
        description: "看见没，这就是魅力！",
        perk1: "将所有任务要求降低8%",
        perk2: "将所有任务要求降低8%",
        job1: "做任务或考试时穿脏衣服/内衣。",
        job2: "做任务或考试时化妆。"
      },
      20: {
        id: "20",
        imgUrl: "#",
        type: "club",
        name: "健康协会",
        days: "0",
        tier: "1",
        description: "Feel smooth",
        perk1: "将所有任务要求降低8%",
        perk2: "将所有任务要求降低8%",
        job1: "确保你的胯部和腋窝是光滑的。",
        job2: "确保你的整个身体都是光滑的。"
      },
      21: {
        id: "21",
        imgUrl: "#",
        type: "club",
        name: "冥想社团",
        days: "0",
        tier: "2",
        description: "花更多的时间思考。",
        perk1: "将所有任务要求降低30%",
        perk2: "获得两张公假条。",
        job1: "听15分钟的白噪音，然后佩戴眼罩和口塞，把你自己自缚成四蹄倒攒/莲花捆绑/青蛙捆绑/木乃伊捆绑任意一种。",
        job2: "听15分钟的性噪音，然后佩戴眼罩和口塞，把你自己自缚成四蹄倒攒/莲花捆绑/青蛙捆绑/木乃伊捆绑任意一种。"
      },
      22: {
        id: "22",
        imgUrl: "#",
        type: "club",
        name: "怪癖社团",
        days: "0",
        tier: "1",
        description: "玩一些玩具。",
        perk1: "将所有任务要求降低8%",
        perk2: "将所有任务要求降低8%",
        job1: "在执行任务时，在屁穴里插入一个跳蛋。",
        job2: "在执行任务时，在阴蒂上放一个跳蛋。"
      },
      23: {
        id: "23",
        imgUrl: "#",
        type: "club",
        name: "运动协会",
        days: "0",
        tier: "1",
        description: "保持健康体型",
        perk1: "将所有任务要求降低8%",
        perk2: "将所有任务要求降低8%",
        job1: "做10分钟的运动。(俯卧撑、立蹲起、开合跳、立卧撑、仰卧起坐)。",
        job2: "做10分钟的瑜伽。"
      },
      24: {
        id: "24",
        imgUrl: "#",
        type: "club",
        name: "健美协会",
        days: "0",
        tier: "2",
        description: "肌肉就是唯一生产力！",
        perk1: "将所有任务要求降低30%",
        perk2: "获得两张公假条。",
        job1: "从今天的运动中燃烧400卡路里。",
        job2: "今天锻炼60分钟。"
      }
    };
  }
  static get punishmentsData() {
    return {
      1: {
        id: "1",
        imgUrl: "#",
        type: "punishment",
        tier: "1",
        name: "【贞操管理】",
        description: "你被迫戴上4小时贞操笼。"
      },
      2: {
        id: "2",
        imgUrl: "#",
        type: "punishment",
        tier: "1",
        name: "【强制女性化】",
        description: "你被迫穿着性感丝袜和内衣30分钟。"
      },
      3: {
        id: "3",
        imgUrl: "#",
        type: "punishment",
        tier: "1",
        name: "【强制催眠】",
        description: "你被迫听20分钟的洗脑音频。"
      },
      4: {
        id: "4",
        imgUrl: "#",
        type: "punishment",
        tier: "1",
        name: "【强制鞭刑】",
        description: "你被迫在自己的屁股两侧各打十下。"
      },
      5: {
        id: "5",
        imgUrl: "#",
        type: "punishment",
        tier: "1",
        name: "【强制灌肠】",
        description: "你被送到学校的护士那里，被被迫灌入500毫升的灌肠剂，保持5分钟。"
      },
      6: {
        id: "6",
        imgUrl: "#",
        type: "punishment",
        tier: "1",
        name: "【强制寸止】",
        description: "你被强制坐在显示器面前一边观看色情片一边寸止3次，禁止高潮！"
      },
      7: {
        id: "7",
        imgUrl: "#",
        type: "punishment",
        tier: "1",
        name: "【强制雌犬教育】",
        description: "你被迫戴上20分钟的动物耳朵/尾巴/项圈，并且四肢着地。"
      },
      8: {
        id: "8",
        imgUrl: "#",
        type: "punishment",
        tier: "1",
        name: "【劳教-女佣】",
        description: "在菊穴内插入假阳具/肛塞，做15分钟家务。（最好穿上女仆装）"
      },
      9: {
        id: "9",
        imgUrl: "#",
        type: "punishment",
        tier: "1",
        name: "【强制口交】",
        description: "你被迫给假阳具/大鸡巴做5分钟口交，并且在最后的时刻深喉一次。"
      },
      10: {
        id: "10",
        imgUrl: "#",
        type: "punishment",
        tier: "1",
        name: "【羞辱】",
        description: "你被迫在你的身体上写上三个侮辱性的词语，并在你今天剩余时间里保持它不被清洗(至少60分钟)。词语例如:荡妇、妓女、奴隶、肉便器等.."
      },
      11: {
        id: "11",
        imgUrl: "#",
        type: "punishment",
        tier: "1",
        name: "【强制群交惩罚】",
        description: "全班都因为你受到了惩罚，所以他们决定给你一个教训，疯狂的轮奸你。用两个不同大小的阳具把自己双穴（菊穴和嘴穴）贯穿式抽插10分钟。"
      },
      12: {
        id: "12",
        imgUrl: "#",
        type: "punishment",
        tier: "1",
        name: "【强制呼吸控制】",
        description: "你被迫佩戴20分钟的项圈（拉紧一点）。"
      },
      13: {
        id: "13",
        imgUrl: "#",
        type: "punishment",
        tier: "1",
        name: "【强制肛交】",
        description: "你被迫用假阳具操你的菊穴10分钟。"
      },
      14: {
        id: "14",
        imgUrl: "#",
        type: "punishment",
        tier: "1",
        name: "【强制感官剥夺】",
        description: "你被迫在佩戴眼罩和口塞的情况下听10分钟的性噪音。(你可以在做这个惩罚的时候尝试做其他的事情)"
      },
      15: {
        id: "15",
        imgUrl: "#",
        type: "punishment",
        tier: "2",
        name: "【强制上锁】",
        description: "你被迫佩戴12小时贞操笼。"
      },
      16: {
        id: "16",
        imgUrl: "#",
        type: "punishment",
        tier: "2",
        name: "【强制变装】",
        description: "你被迫穿上性感的女性内衣和丝袜60分钟。"
      },
      17: {
        id: "17",
        imgUrl: "#",
        type: "punishment",
        tier: "2",
        name: "【强制洗脑】",
        description: "你被迫听40分钟的男娘洗脑音频。"
      },
      18: {
        id: "18",
        imgUrl: "#",
        type: "punishment",
        tier: "2",
        name: "【强制乳头折磨】",
        description: "你被迫佩戴乳头夹15分钟。"
      },
      19: {
        id: "19",
        imgUrl: "#",
        type: "punishment",
        tier: "2",
        name: "【强制灌肠实验】",
        description: "你被送到学校的护士那里，被迫灌入1000毫升的灌肠剂，并且保持10分钟。"
      },
      20: {
        id: "20",
        imgUrl: "#",
        type: "punishment",
        tier: "2",
        name: "【强制绳缚】",
        description: "你被强制驷马缚20分钟。"
      },
      21: {
        id: "21",
        imgUrl: "#",
        type: "punishment",
        tier: "2",
        name: "【强制高潮控制】",
        description: "你被强制坐在显示器面前一边观看色情片一边寸止5次，禁止高潮！"
      },
      22: {
        id: "22",
        imgUrl: "#",
        type: "punishment",
        tier: "2",
        name: "【强制母畜训练】",
        description: "你被迫绑成bitchsuit的样子，保持20分钟。"
      },
      23: {
        id: "23",
        imgUrl: "#",
        type: "punishment",
        tier: "2",
        name: "【强制女奴训练】",
        description: "你被迫打扫你整个房子，而你的菊穴(或阴部)塞入跳蛋或者你也可以用假阳具/肛塞(XL码)。做家务：洗碗，打扫厕所和厨房的炉子。"
      },
      24: {
        id: "24",
        imgUrl: "#",
        type: "punishment",
        tier: "2",
        name: "【强制深喉】",
        description: "你被迫深喉假阳具十次，每次保持5秒。"
      },
      25: {
        id: "25",
        imgUrl: "#",
        type: "punishment",
        tier: "2",
        name: "【强制公开羞辱】",
        description: "拍下在你的身体上写十个侮辱性的词语，并在聊天室或推特分享它。"
      },
      26: {
        id: "26",
        imgUrl: "#",
        type: "punishment",
        tier: "2",
        name: "【强制奴隶训练】",
        description: "学校的老师对你的表现不满意，所以他们把你送进了监管所。在聊天室或推特请求惩罚任务，你最多可以重新请求3次。"
      },
      27: {
        id: "27",
        imgUrl: "#",
        type: "punishment",
        tier: "3",
        name: "【窒息调教】",
        description: "你被迫把一个塑料袋戴在头上，然后绑在脖子上。你可以用橡皮筋(推荐)或皮带/绳子/项圈。坚持60秒，确保它不太紧。"
      },
      28: {
        id: "28",
        imgUrl: "#",
        type: "punishment",
        tier: "2",
        name: "【强制肛塞佩戴】",
        description: "你被迫佩戴肛塞2小时。"
      },
      29: {
        id: "29",
        imgUrl: "#",
        type: "punishment",
        tier: "2",
        name: "【强制隔离】",
        description: "你被绑成木乃伊，被迫听15分钟的性噪音，眼睛被蒙上，嘴巴被塞住。你可以在屁股上插个振动肛塞，这样你就不会太无聊了。"
      },
      30: {
        id: "30",
        imgUrl: "#",
        type: "punishment",
        tier: "1",
        name: "【强制品尝精液】",
        description: "你被迫手淫和舔掉你所以的（高潮液/精液）和前列腺液。"
      },
      31: {
        id: "31",
        imgUrl: "#",
        type: "punishment",
        tier: "2",
        name: "【强制吞食精液】",
        description: "你被迫喝下大量的精液(真精液或假精液)"
      },
      32: {
        id: "32",
        imgUrl: "#",
        type: "punishment",
        tier: "2",
        name: "【强制轮奸惩罚】",
        description: "全班又因为你而受到惩罚，所以他们决定给你一个真正的教训。他们会打你屁股20次，还会给你戴上乳头夹。然后他们在你的菊穴(或小穴)插入一个假阳具（L码），让你再深喉20次。然后他们会同时操你的嘴穴和菊穴（或小穴）10分钟，最好他们把乳头夹直接拉下来，才放过你。"
      },
      33: {
        id: "33",
        imgUrl: "#",
        type: "punishment",
        tier: "2",
        name: "【强制疼痛惩罚】",
        description: "用一个物体(拍子/皮带/衣架/鞭子等)在你的屁股两侧各打20次，然后拍打你的蛋蛋/阴部5次。"
      },
      34: {
        id: "34",
        imgUrl: "#",
        type: "punishment",
        tier: "3",
        name: "【衣夹拉链调教】",
        description: "制作一个从一个乳头到另一个乳头的衣夹拉链(至少10个衣夹)。然后从左至右将拉链拉开（扯掉）~。"
      },
      35: {
        id: "35",
        imgUrl: "#",
        type: "punishment",
        tier: "3",
        name: "【麻痹自慰调教】",
        description: "在生殖器上涂抹麻醉霜(利多卡因/安麻樂乳膏2.5% - 5%)。看色情片时手淫15分钟。"
      },
      36: {
        id: "36",
        imgUrl: "#",
        type: "punishment",
        tier: "3",
        name: "【疼痛灌肠调教】",
        description: "混合950毫升水和120毫升植物甘油和55克泻盐(硫酸镁)。保存这种合剂灌肠3分钟。"
      },
      37: {
        id: "37",
        imgUrl: "#",
        type: "punishment",
        tier: "3",
        name: "【午夜束缚调教】",
        description: "今晚在束缚中睡觉(至少6小时)。例如:腿和胳膊被绑着/戴着手铐，像木乃伊一样被绑着，戴着眼罩和口塞"
      },
      38: {
        id: "38",
        imgUrl: "#",
        type: "punishment",
        tier: "3",
        name: "【抖喵酱的敲诈】",
        description: "向网站捐赠10元"
      },
      39: {
        id: "39",
        imgUrl: "#",
        type: "punishment",
        tier: "3",
        name: "【女佣奴隶调教】",
        description: "把你的脚踝和手腕绑上手铐和脚拷，佩戴上口塞和高跟鞋(至少4.5英寸)(见参考图片)。彻底打扫你的整个房间(至少60分钟)。"
      },
      40: {
        id: "40",
        imgUrl: "#",
        type: "punishment",
        tier: "3",
        name: "【人体蜈蚣调教】",
        description: "用假阳具(L码)操自己的菊穴 5 分钟，然后再用它口交 5 分钟 ，其中至少有10个深喉。（途中禁止清洁）"
      },
      41: {
        id: "41",
        imgUrl: "#",
        type: "punishment",
        tier: "3",
        name: "【肛交排泄挑战】",
        description: "用假阳具(L码)操自己的菊穴 5 分钟，用植物甘油作为润滑剂。"
      },
      42: {
        id: "42",
        imgUrl: "#",
        type: "punishment",
        tier: "3",
        name: "【精液便器调教】",
        description: "将精液(真精液或假精液)涂于假阳具(L码)，然后和深喉假阳具(19cm)20次。（每一次都要涂一点精液在阳具或嘴唇上）"
      },
      43: {
        id: "43",
        imgUrl: "#",
        type: "punishment",
        tier: "3",
        name: "【强制高潮后刺激】",
        description: "手淫达到高潮，并持续刺激60秒。"
      },
      44: {
        id: "44",
        imgUrl: "#",
        type: "punishment",
        tier: "3",
        name: "【耐力挑战赛】",
        description: "寸止8次（禁止射精）然后用贞操（笼/带）锁24小时。"
      },
      45: {
        id: "45",
        imgUrl: "#",
        type: "punishment",
        tier: "3",
        name: "【女性物品惩罚】",
        description: "穿女性内衣和长筒袜/连裤袜24小时。它们可以藏在你的衣服下面。"
      },
      46: {
        id: "46",
        imgUrl: "#",
        type: "punishment",
        tier: "3",
        name: "【正跪惩罚】",
        description: "把双手绑在背后，跪在键盘、搓衣板、米饭或粗糙的表面上10分钟。使用图片作为参考…"
      },
      47: {
        id: "47",
        imgUrl: "#",
        type: "punishment",
        tier: "3",
        name: "【奴役调教惩罚】",
        description: "学校对你很失望，所以他们让你接受公开审判。在聊天室或TG群里申请3个性奴任务。"
      }
    };
  }
  static get rouletteChoices() {
    return {
      1: {
        imgUrl: "#",
        title: "不准高潮！！",
        description: "你今天不准高潮！！但是你可以明天再试哦~"
      },
      2: {
        imgUrl: "#",
        title: "不准高潮！！",
        description: "你今天不准高潮！！但是你可以明天再试哦~"
      },
      3: {
        imgUrl: "#",
        title: "不准高潮！！",
        description: "你今天不准高潮！！但是你可以明天再试哦~"
      },
      4: {
        imgUrl: "#",
        title: "乞求",
        description: "你可以去推特弄个投票看看推友们让不让你高潮~"
      },
      5: {
        imgUrl: "#",
        title: "挑逗",
        description: "寸止两次，要记住今天你不能高潮哦!!！"
      },
      6: {
        imgUrl: "#",
        title: "毁灭高潮",
        description: "恭喜你，你今天有一次高潮的机会，但是只能毁灭高潮哦！哈哈哈~"
      },
      7: {
        imgUrl: "#",
        title: "随意高潮",
        description: "哇，你也太幸运了把，你今天可以高潮哦！！"
      },
      8: {
        imgUrl: "#",
        title: "前列腺高潮",
        description: "你今天可以射精，但只能通过（前列腺/菊穴）高潮哦！。"
      },
      9: {
        imgUrl: "#",
        title: "惩罚",
        description: "你还是想要高潮??今天是不行了，你只是受到了一点点小惩罚！！你可以明天再是一次哦！!"
      },
      10: {
        imgUrl: "#",
        title: "挑逗",
        description: "寸止两次，要记住今天你不能高潮哦!!！"
      }
    };
  }
  static get careersData() {
    return {};
  }
  static get hardcorePunishments() {
    return {};
  }
  static get communityContent() {
    return {};
  }
}
class l {
  static getMajorsData() {
    return o.majorsData;
  }
  static getMajorById(t) {
    return o.majorsData[Number(t)];
  }
  static getCurrentMajor() {
    let t = l.getCurrentMajorId();
    return o.majorsData[t];
  }
  static getCurrentMajorId() {
    return JSON.parse(localStorage.getItem("currentMajor"));
  }
  static getCompletedMajors() {
    return JSON.parse(localStorage.getItem("completedMajors"));
  }
  static setCompletedMajors(t) {
    localStorage.setItem("completedMajors", JSON.stringify(t));
  }
  static setFinalThesisInProgress(t) {
    localStorage.setItem("finalThesisInProgress", JSON.stringify(t));
  }
  static resetCurretnMajor() {
    localStorage.setItem("currentMajor", JSON.stringify(null));
  }
  static isFinalThesisInProgress() {
    return JSON.parse(localStorage.getItem("finalThesisInProgress"));
  }
  static setCurrentMajor(t) {
    localStorage.setItem("currentMajor", JSON.stringify(t));
  }
}
class n {
  static get Data() {
    return {
      0: {
        id: "0",
        url: "img/default",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1: {
        id: "1",
        url: "img/image1",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      2: {
        id: "2",
        url: "img/image2",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      3: {
        id: "3",
        url: "img/image3",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      4: {
        id: "4",
        url: "img/image4",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      5: {
        id: "5",
        url: "img/image5",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      6: {
        id: "6",
        url: "img/image6",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      7: {
        id: "7",
        url: "img/image7",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      8: {
        id: "8",
        url: "img/image8",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      9: {
        id: "9",
        url: "img/image9",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      10: {
        id: "10",
        url: "img/image10",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      11: {
        id: "11",
        url: "img/image11",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      12: {
        id: "12",
        url: "img/image12",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      13: {
        id: "13",
        url: "img/image13",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      14: {
        id: "14",
        url: "img/image14",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      16: {
        id: "16",
        url: "img/image16",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      17: {
        id: "17",
        url: "img/image17",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      19: {
        id: "19",
        url: "img/image19",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      20: {
        id: "20",
        url: "img/image20",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      22: {
        id: "22",
        url: "img/image22",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      23: {
        id: "23",
        url: "img/image23",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      24: {
        id: "24",
        url: "img/image24",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      25: {
        id: "25",
        url: "img/image25",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      26: {
        id: "26",
        url: "img/image26",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      27: {
        id: "27",
        url: "img/image27",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      28: {
        id: "28",
        url: "img/image28",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      29: {
        id: "29",
        url: "img/image29",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      30: {
        id: "30",
        url: "img/image30",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      31: {
        id: "31",
        url: "img/image31",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      32: {
        id: "32",
        url: "img/image32",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      33: {
        id: "33",
        url: "img/image33",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      34: {
        id: "34",
        url: "img/image34",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      35: {
        id: "35",
        url: "img/image35",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      37: {
        id: "37",
        url: "img/image37",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      38: {
        id: "38",
        url: "img/image38",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      39: {
        id: "39",
        url: "img/image39",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      40: {
        id: "40",
        url: "img/image40",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      41: {
        id: "41",
        url: "img/image41",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      42: {
        id: "42",
        url: "img/image42",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      43: {
        id: "43",
        url: "img/image43",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      44: {
        id: "44",
        url: "img/image44",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      45: {
        id: "45",
        url: "img/image45",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      46: {
        id: "46",
        url: "img/image46",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      48: {
        id: "48",
        url: "img/image48",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      49: {
        id: "49",
        url: "img/image49",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      50: {
        id: "50",
        url: "img/image50",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      51: {
        id: "51",
        url: "img/image51",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      53: {
        id: "53",
        url: "img/image53",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      54: {
        id: "54",
        url: "img/image54",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      55: {
        id: "55",
        url: "img/image55",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      56: {
        id: "56",
        url: "img/image56",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      57: {
        id: "57",
        url: "img/image57",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      58: {
        id: "58",
        url: "img/image58",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      59: {
        id: "59",
        url: "img/image59",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      60: {
        id: "60",
        url: "img/image60",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      61: {
        id: "61",
        url: "img/image61",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      62: {
        id: "62",
        url: "img/image62",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      63: {
        id: "63",
        url: "img/image63",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      64: {
        id: "64",
        url: "img/image64",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      65: {
        id: "65",
        url: "img/image65",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      66: {
        id: "66",
        url: "img/image66",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      68: {
        id: "68",
        url: "img/image68",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      69: {
        id: "69",
        url: "img/image69",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      70: {
        id: "70",
        url: "img/image70",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      71: {
        id: "71",
        url: "img/image71",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      72: {
        id: "72",
        url: "img/image72",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      74: {
        id: "74",
        url: "img/image74",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      76: {
        id: "76",
        url: "img/image76",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      79: {
        id: "79",
        url: "img/image79",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      80: {
        id: "80",
        url: "img/image80",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      81: {
        id: "81",
        url: "img/image81",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      85: {
        id: "85",
        url: "img/image85",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      86: {
        id: "86",
        url: "img/image86",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      87: {
        id: "87",
        url: "img/image87",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      88: {
        id: "88",
        url: "img/image88",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      89: {
        id: "89",
        url: "img/image89",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      90: {
        id: "90",
        url: "img/image90",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      92: {
        id: "92",
        url: "img/image92",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      93: {
        id: "93",
        url: "img/image93",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      98: {
        id: "98",
        url: "img/image98",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      99: {
        id: "99",
        url: "img/image99",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      100: {
        id: "100",
        url: "img/image100",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      101: {
        id: "101",
        url: "img/image101",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      102: {
        id: "102",
        url: "img/image102",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      103: {
        id: "103",
        url: "img/image103",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      104: {
        id: "104",
        url: "img/image104",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      105: {
        id: "105",
        url: "img/image105",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      106: {
        id: "106",
        url: "img/image106",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      107: {
        id: "107",
        url: "img/image107",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      108: {
        id: "108",
        url: "img/image108",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      109: {
        id: "109",
        url: "img/image109",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      110: {
        id: "110",
        url: "img/image110",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      111: {
        id: "111",
        url: "img/image111",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      112: {
        id: "112",
        url: "img/image112",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      113: {
        id: "113",
        url: "img/image113",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      114: {
        id: "114",
        url: "img/image114",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      116: {
        id: "116",
        url: "img/image116",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      117: {
        id: "117",
        url: "img/image117",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      118: {
        id: "118",
        url: "img/image118",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      119: {
        id: "119",
        url: "img/image119",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      120: {
        id: "120",
        url: "img/image120",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      123: {
        id: "123",
        url: "img/image123",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      125: {
        id: "125",
        url: "img/image125",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      126: {
        id: "126",
        url: "img/image126",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      127: {
        id: "127",
        url: "img/image127",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      128: {
        id: "128",
        url: "img/image128",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      129: {
        id: "129",
        url: "img/image129",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      130: {
        id: "130",
        url: "img/image130",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      131: {
        id: "131",
        url: "img/image131",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      132: {
        id: "132",
        url: "img/image132",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      133: {
        id: "133",
        url: "img/image133",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      138: {
        id: "138",
        url: "img/image138",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      139: {
        id: "139",
        url: "img/image139",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      141: {
        id: "141",
        url: "img/image141",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      145: {
        id: "145",
        url: "img/image145",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      147: {
        id: "147",
        url: "img/image147",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      148: {
        id: "148",
        url: "img/image148",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      149: {
        id: "149",
        url: "img/image149",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      152: {
        id: "152",
        url: "img/image152",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      154: {
        id: "154",
        url: "img/image154",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      155: {
        id: "155",
        url: "img/image155",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      156: {
        id: "156",
        url: "img/image156",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      161: {
        id: "161",
        url: "img/image161",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      162: {
        id: "162",
        url: "img/image162",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      166: {
        id: "166",
        url: "img/image166",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      169: {
        id: "169",
        url: "img/image169",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      171: {
        id: "171",
        url: "img/image171",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      173: {
        id: "173",
        url: "img/image173",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      175: {
        id: "175",
        url: "img/image175",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      177: {
        id: "177",
        url: "img/image177",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      178: {
        id: "178",
        url: "img/image178",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      179: {
        id: "179",
        url: "img/image179",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      180: {
        id: "180",
        url: "img/image180",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      183: {
        id: "183",
        url: "img/image183",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      184: {
        id: "184",
        url: "img/image184",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      187: {
        id: "187",
        url: "img/image187",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      188: {
        id: "188",
        url: "img/image188",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      189: {
        id: "189",
        url: "img/image189",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      193: {
        id: "193",
        url: "img/image193",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      194: {
        id: "194",
        url: "img/image194",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      195: {
        id: "195",
        url: "img/image195",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      196: {
        id: "196",
        url: "img/image196",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      197: {
        id: "197",
        url: "img/image197",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      198: {
        id: "198",
        url: "img/image198",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      199: {
        id: "199",
        url: "img/image199",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      201: {
        id: "201",
        url: "img/image201",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      202: {
        id: "202",
        url: "img/image202",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      203: {
        id: "203",
        url: "img/image203",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      204: {
        id: "204",
        url: "img/image204",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      205: {
        id: "205",
        url: "img/image205",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      206: {
        id: "206",
        url: "img/image206",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      209: {
        id: "209",
        url: "img/image209",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      212: {
        id: "212",
        url: "img/image212",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      214: {
        id: "214",
        url: "img/image214",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      215: {
        id: "215",
        url: "img/image215",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      216: {
        id: "216",
        url: "img/image216",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      217: {
        id: "217",
        url: "img/image217",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      218: {
        id: "218",
        url: "img/image218",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      219: {
        id: "219",
        url: "img/image219",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      220: {
        id: "220",
        url: "img/image220",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      221: {
        id: "221",
        url: "img/image221",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      222: {
        id: "222",
        url: "img/image222",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      224: {
        id: "224",
        url: "img/image224",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      225: {
        id: "225",
        url: "img/image225",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      226: {
        id: "226",
        url: "img/image226",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      228: {
        id: "228",
        url: "img/image228",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      229: {
        id: "229",
        url: "img/image229",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      230: {
        id: "230",
        url: "img/image230",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      231: {
        id: "231",
        url: "img/image231",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      232: {
        id: "232",
        url: "img/image232",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      233: {
        id: "233",
        url: "img/image233",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      234: {
        id: "234",
        url: "img/image234",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      235: {
        id: "235",
        url: "img/image235",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      236: {
        id: "236",
        url: "img/image236",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      238: {
        id: "238",
        url: "img/image238",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      239: {
        id: "239",
        url: "img/image239",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      240: {
        id: "240",
        url: "img/image240",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      242: {
        id: "242",
        url: "img/image242",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      243: {
        id: "243",
        url: "img/image243",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      244: {
        id: "244",
        url: "img/image244",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      245: {
        id: "245",
        url: "img/image245",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      246: {
        id: "246",
        url: "img/image246",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      247: {
        id: "247",
        url: "img/image247",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      248: {
        id: "248",
        url: "img/image248",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      249: {
        id: "249",
        url: "img/image249",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      250: {
        id: "250",
        url: "img/image250",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      251: {
        id: "251",
        url: "img/image251",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      252: {
        id: "252",
        url: "img/image252",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      253: {
        id: "253",
        url: "img/image253",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      257: {
        id: "257",
        url: "img/image257",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      259: {
        id: "259",
        url: "img/image259",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      260: {
        id: "260",
        url: "img/image260",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      261: {
        id: "261",
        url: "img/image261",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      262: {
        id: "262",
        url: "img/image262",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      264: {
        id: "264",
        url: "img/image264",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      265: {
        id: "265",
        url: "img/image265",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      268: {
        id: "268",
        url: "img/image268",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      269: {
        id: "269",
        url: "img/image269",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      273: {
        id: "273",
        url: "img/image273",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      275: {
        id: "275",
        url: "img/image275",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      278: {
        id: "278",
        url: "img/image278",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      279: {
        id: "279",
        url: "img/image279",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      281: {
        id: "281",
        url: "img/image281",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      284: {
        id: "284",
        url: "img/image284",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      286: {
        id: "286",
        url: "img/image286",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      287: {
        id: "287",
        url: "img/image287",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      288: {
        id: "288",
        url: "img/image288",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      289: {
        id: "289",
        url: "img/image289",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      290: {
        id: "290",
        url: "img/image290",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      291: {
        id: "291",
        url: "img/image291",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      294: {
        id: "294",
        url: "img/image294",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      295: {
        id: "295",
        url: "img/image295",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      297: {
        id: "297",
        url: "img/image297",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      303: {
        id: "303",
        url: "img/image303",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      304: {
        id: "304",
        url: "img/image304",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      306: {
        id: "306",
        url: "img/image306",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      314: {
        id: "314",
        url: "img/image314",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      315: {
        id: "315",
        url: "img/image315",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      316: {
        id: "316",
        url: "img/image316",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      317: {
        id: "317",
        url: "img/image317",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      320: {
        id: "320",
        url: "img/image320",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      321: {
        id: "321",
        url: "img/image321",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      323: {
        id: "323",
        url: "img/image323",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      324: {
        id: "324",
        url: "img/image324",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      326: {
        id: "326",
        url: "img/image326",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      327: {
        id: "327",
        url: "img/image327",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      328: {
        id: "328",
        url: "img/image328",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      330: {
        id: "330",
        url: "img/image330",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      331: {
        id: "331",
        url: "img/image331",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      333: {
        id: "333",
        url: "img/image333",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      335: {
        id: "335",
        url: "img/image335",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      338: {
        id: "338",
        url: "img/image338",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      339: {
        id: "339",
        url: "img/image339",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      340: {
        id: "340",
        url: "img/image340",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      341: {
        id: "341",
        url: "img/image341",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      346: {
        id: "346",
        url: "img/image346",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      347: {
        id: "347",
        url: "img/image347",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      349: {
        id: "349",
        url: "img/image349",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      353: {
        id: "353",
        url: "img/image353",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      354: {
        id: "354",
        url: "img/image354",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      355: {
        id: "355",
        url: "img/image355",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      359: {
        id: "359",
        url: "img/image359",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      360: {
        id: "360",
        url: "img/image360",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      361: {
        id: "361",
        url: "img/image361",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      364: {
        id: "364",
        url: "img/image364",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      365: {
        id: "365",
        url: "img/image365",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      366: {
        id: "366",
        url: "img/image366",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      367: {
        id: "367",
        url: "img/image367",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      368: {
        id: "368",
        url: "img/image368",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      370: {
        id: "370",
        url: "img/image370",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      371: {
        id: "371",
        url: "img/image371",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      372: {
        id: "372",
        url: "img/image372",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      373: {
        id: "373",
        url: "img/image373",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      374: {
        id: "374",
        url: "img/image374",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      375: {
        id: "375",
        url: "img/image375",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      376: {
        id: "376",
        url: "img/image376",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      377: {
        id: "377",
        url: "img/image377",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      378: {
        id: "378",
        url: "img/image378",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      379: {
        id: "379",
        url: "img/image379",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      380: {
        id: "380",
        url: "img/image380",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      381: {
        id: "381",
        url: "img/image381",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      382: {
        id: "382",
        url: "img/image382",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      383: {
        id: "383",
        url: "img/image383",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      384: {
        id: "384",
        url: "img/image384",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      385: {
        id: "385",
        url: "img/image385",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      386: {
        id: "386",
        url: "img/image386",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      387: {
        id: "387",
        url: "img/image387",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      388: {
        id: "388",
        url: "img/image388",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      389: {
        id: "389",
        url: "img/image389",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      391: {
        id: "391",
        url: "img/image391",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      392: {
        id: "392",
        url: "img/image392",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      393: {
        id: "393",
        url: "img/image393",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      394: {
        id: "394",
        url: "img/image394",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      395: {
        id: "395",
        url: "img/image395",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      396: {
        id: "396",
        url: "img/image396",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      397: {
        id: "397",
        url: "img/image397",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      398: {
        id: "398",
        url: "img/image398",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      400: {
        id: "400",
        url: "img/image400",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      401: {
        id: "401",
        url: "img/image401",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      402: {
        id: "402",
        url: "img/image402",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      405: {
        id: "405",
        url: "img/image405",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      406: {
        id: "406",
        url: "img/image406",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      407: {
        id: "407",
        url: "img/image407",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      408: {
        id: "408",
        url: "img/image408",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      409: {
        id: "409",
        url: "img/image409",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      410: {
        id: "410",
        url: "img/image410",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      411: {
        id: "411",
        url: "img/image411",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      412: {
        id: "412",
        url: "img/image412",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      413: {
        id: "413",
        url: "img/image413",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      414: {
        id: "414",
        url: "img/image414",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      415: {
        id: "415",
        url: "img/image415",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      416: {
        id: "416",
        url: "img/image416",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      417: {
        id: "417",
        url: "img/image417",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      419: {
        id: "419",
        url: "img/image419",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      420: {
        id: "420",
        url: "img/image420",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      421: {
        id: "421",
        url: "img/image421",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      422: {
        id: "422",
        url: "img/image422",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      423: {
        id: "423",
        url: "img/image423",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      424: {
        id: "424",
        url: "img/image424",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      425: {
        id: "425",
        url: "img/image425",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      426: {
        id: "426",
        url: "img/image426",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      427: {
        id: "427",
        url: "img/image427",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      429: {
        id: "429",
        url: "img/image429",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      430: {
        id: "430",
        url: "img/image430",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      431: {
        id: "431",
        url: "img/image431",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      433: {
        id: "433",
        url: "img/image433",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      439: {
        id: "439",
        url: "img/image439",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      440: {
        id: "440",
        url: "img/image440",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      441: {
        id: "441",
        url: "img/image441",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      442: {
        id: "442",
        url: "img/image442",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      443: {
        id: "443",
        url: "img/image443",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      444: {
        id: "444",
        url: "img/image444",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      445: {
        id: "445",
        url: "img/image445",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      448: {
        id: "448",
        url: "img/image448",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      449: {
        id: "449",
        url: "img/image449",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      450: {
        id: "450",
        url: "img/image450",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      451: {
        id: "451",
        url: "img/image451",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      452: {
        id: "452",
        url: "img/image452",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      455: {
        id: "455",
        url: "img/image455",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      456: {
        id: "456",
        url: "img/image456",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      457: {
        id: "457",
        url: "img/image457",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      458: {
        id: "458",
        url: "img/image458",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      459: {
        id: "459",
        url: "img/image459",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      460: {
        id: "460",
        url: "img/image460",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      461: {
        id: "461",
        url: "img/image461",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      462: {
        id: "462",
        url: "img/image462",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      463: {
        id: "463",
        url: "img/image463",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      464: {
        id: "464",
        url: "img/image464",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      465: {
        id: "465",
        url: "img/image465",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      466: {
        id: "466",
        url: "img/image466",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      467: {
        id: "467",
        url: "img/image467",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      469: {
        id: "469",
        url: "img/image469",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      470: {
        id: "470",
        url: "img/image470",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      472: {
        id: "472",
        url: "img/image472",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      473: {
        id: "473",
        url: "img/image473",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      474: {
        id: "474",
        url: "img/image474",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      476: {
        id: "476",
        url: "img/image476",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      477: {
        id: "477",
        url: "img/image477",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      478: {
        id: "478",
        url: "img/image478",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      479: {
        id: "479",
        url: "img/image479",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      480: {
        id: "480",
        url: "img/image480",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      481: {
        id: "481",
        url: "img/image481",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      482: {
        id: "482",
        url: "img/image482",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      483: {
        id: "483",
        url: "img/image483",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      484: {
        id: "484",
        url: "img/image484",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      485: {
        id: "485",
        url: "img/image485",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      487: {
        id: "487",
        url: "img/image487",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      488: {
        id: "488",
        url: "img/image488",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      489: {
        id: "489",
        url: "img/image489",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      490: {
        id: "490",
        url: "img/image490",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      491: {
        id: "491",
        url: "img/image491",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      492: {
        id: "492",
        url: "img/image492",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      493: {
        id: "493",
        url: "img/image493",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      496: {
        id: "496",
        url: "img/image496",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      497: {
        id: "497",
        url: "img/image497",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      498: {
        id: "498",
        url: "img/image498",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      499: {
        id: "499",
        url: "img/image499",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      500: {
        id: "500",
        url: "img/image500",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      501: {
        id: "501",
        url: "img/image501",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      503: {
        id: "503",
        url: "img/image503",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      504: {
        id: "504",
        url: "img/image504",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      505: {
        id: "505",
        url: "img/image505",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      506: {
        id: "506",
        url: "img/image506",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      507: {
        id: "507",
        url: "img/image507",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      508: {
        id: "508",
        url: "img/image508",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      509: {
        id: "509",
        url: "img/image509",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      510: {
        id: "510",
        url: "img/image510",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      511: {
        id: "511",
        url: "img/image511",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      513: {
        id: "513",
        url: "img/image513",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      514: {
        id: "514",
        url: "img/image514",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      515: {
        id: "515",
        url: "img/image515",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      516: {
        id: "516",
        url: "img/image516",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      517: {
        id: "517",
        url: "img/image517",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      518: {
        id: "518",
        url: "img/image518",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      519: {
        id: "519",
        url: "img/image519",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      520: {
        id: "520",
        url: "img/image520",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      521: {
        id: "521",
        url: "img/image521",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      522: {
        id: "522",
        url: "img/image522",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      523: {
        id: "523",
        url: "img/image523",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      524: {
        id: "524",
        url: "img/image524",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      525: {
        id: "525",
        url: "img/image525",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      526: {
        id: "526",
        url: "img/image526",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      527: {
        id: "527",
        url: "img/image527",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      529: {
        id: "529",
        url: "img/image529",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      530: {
        id: "530",
        url: "img/image530",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      531: {
        id: "531",
        url: "img/image531",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      532: {
        id: "532",
        url: "img/image532",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      533: {
        id: "533",
        url: "img/image533",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      534: {
        id: "534",
        url: "img/image534",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      535: {
        id: "535",
        url: "img/image535",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      537: {
        id: "537",
        url: "img/image537",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      538: {
        id: "538",
        url: "img/image538",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      539: {
        id: "539",
        url: "img/image539",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      540: {
        id: "540",
        url: "img/image540",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      541: {
        id: "541",
        url: "img/image541",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      542: {
        id: "542",
        url: "img/image542",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      543: {
        id: "543",
        url: "img/image543",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      544: {
        id: "544",
        url: "img/image544",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      546: {
        id: "546",
        url: "img/image546",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      548: {
        id: "548",
        url: "img/image548",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      549: {
        id: "549",
        url: "img/image549",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      554: {
        id: "554",
        url: "img/image554",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      557: {
        id: "557",
        url: "img/image557",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      560: {
        id: "560",
        url: "img/image560",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      561: {
        id: "561",
        url: "img/image561",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      562: {
        id: "562",
        url: "img/image562",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      563: {
        id: "563",
        url: "img/image563",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      564: {
        id: "564",
        url: "img/image564",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      565: {
        id: "565",
        url: "img/image565",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      566: {
        id: "566",
        url: "img/image566",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      567: {
        id: "567",
        url: "img/image567",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      568: {
        id: "568",
        url: "img/image568",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      569: {
        id: "569",
        url: "img/image569",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      570: {
        id: "570",
        url: "img/image570",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      574: {
        id: "574",
        url: "img/image574",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      575: {
        id: "575",
        url: "img/image575",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      577: {
        id: "577",
        url: "img/image577",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      580: {
        id: "580",
        url: "img/image580",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      582: {
        id: "582",
        url: "img/image582",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      583: {
        id: "583",
        url: "img/image583",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      584: {
        id: "584",
        url: "img/image584",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      585: {
        id: "585",
        url: "img/image585",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      586: {
        id: "586",
        url: "img/image586",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      589: {
        id: "589",
        url: "img/image589",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      593: {
        id: "593",
        url: "img/image593",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      594: {
        id: "594",
        url: "img/image594",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      597: {
        id: "597",
        url: "img/image597",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      601: {
        id: "601",
        url: "img/image601",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      602: {
        id: "602",
        url: "img/image602",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      603: {
        id: "603",
        url: "img/image603",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      604: {
        id: "604",
        url: "img/image604",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      605: {
        id: "605",
        url: "img/image605",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      606: {
        id: "606",
        url: "img/image606",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      610: {
        id: "610",
        url: "img/image610",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      611: {
        id: "611",
        url: "img/image611",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      612: {
        id: "612",
        url: "img/image612",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      613: {
        id: "613",
        url: "img/image613",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      614: {
        id: "614",
        url: "img/image614",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      615: {
        id: "615",
        url: "img/image615",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      617: {
        id: "617",
        url: "img/image617",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      619: {
        id: "619",
        url: "img/image619",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      620: {
        id: "620",
        url: "img/image620",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      621: {
        id: "621",
        url: "img/image621",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      624: {
        id: "624",
        url: "img/image624",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      625: {
        id: "625",
        url: "img/image625",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      627: {
        id: "627",
        url: "img/image627",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      628: {
        id: "628",
        url: "img/image628",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      630: {
        id: "630",
        url: "img/image630",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      631: {
        id: "631",
        url: "img/image631",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      633: {
        id: "633",
        url: "img/image633",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      634: {
        id: "634",
        url: "img/image634",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      635: {
        id: "635",
        url: "img/image635",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      636: {
        id: "636",
        url: "img/image636",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      638: {
        id: "638",
        url: "img/image638",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      639: {
        id: "639",
        url: "img/image639",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      642: {
        id: "642",
        url: "img/image642",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      644: {
        id: "644",
        url: "img/image644",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      645: {
        id: "645",
        url: "img/image645",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      646: {
        id: "646",
        url: "img/image646",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      647: {
        id: "647",
        url: "img/image647",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      651: {
        id: "651",
        url: "img/image651",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      652: {
        id: "652",
        url: "img/image652",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      653: {
        id: "653",
        url: "img/image653",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      654: {
        id: "654",
        url: "img/image654",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      656: {
        id: "656",
        url: "img/image656",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      657: {
        id: "657",
        url: "img/image657",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      658: {
        id: "658",
        url: "img/image658",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      659: {
        id: "659",
        url: "img/image659",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      660: {
        id: "660",
        url: "img/image660",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      661: {
        id: "661",
        url: "img/image661",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      662: {
        id: "662",
        url: "img/image662",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      663: {
        id: "663",
        url: "img/image663",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      664: {
        id: "664",
        url: "img/image664",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      666: {
        id: "666",
        url: "img/image666",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      667: {
        id: "667",
        url: "img/image667",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      668: {
        id: "668",
        url: "img/image668",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      670: {
        id: "670",
        url: "img/image670",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      671: {
        id: "671",
        url: "img/image671",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      674: {
        id: "674",
        url: "img/image674",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      675: {
        id: "675",
        url: "img/image675",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      676: {
        id: "676",
        url: "img/image676",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      680: {
        id: "680",
        url: "img/image680",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      681: {
        id: "681",
        url: "img/image681",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      682: {
        id: "682",
        url: "img/image682",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      683: {
        id: "683",
        url: "img/image683",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      684: {
        id: "684",
        url: "img/image684",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      685: {
        id: "685",
        url: "img/image685",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      690: {
        id: "690",
        url: "img/image690",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      692: {
        id: "692",
        url: "img/image692",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      698: {
        id: "698",
        url: "img/image698",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      700: {
        id: "700",
        url: "img/image700",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      702: {
        id: "702",
        url: "img/image702",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      705: {
        id: "705",
        url: "img/image705",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      706: {
        id: "706",
        url: "img/image706",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      707: {
        id: "707",
        url: "img/image707",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      708: {
        id: "708",
        url: "img/image708",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      709: {
        id: "709",
        url: "img/image709",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      710: {
        id: "710",
        url: "img/image710",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      712: {
        id: "712",
        url: "img/image712",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      713: {
        id: "713",
        url: "img/image713",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      714: {
        id: "714",
        url: "img/image714",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      715: {
        id: "715",
        url: "img/image715",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      718: {
        id: "718",
        url: "img/image718",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      734: {
        id: "734",
        url: "img/image734",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      739: {
        id: "739",
        url: "img/image739",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      740: {
        id: "740",
        url: "img/image740",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      741: {
        id: "741",
        url: "img/image741",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      743: {
        id: "743",
        url: "img/image743",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      744: {
        id: "744",
        url: "img/image744",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      745: {
        id: "745",
        url: "img/image745",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      746: {
        id: "746",
        url: "img/image746",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      749: {
        id: "749",
        url: "img/image749",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      750: {
        id: "750",
        url: "img/image750",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      751: {
        id: "751",
        url: "img/image751",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      752: {
        id: "752",
        url: "img/image752",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      753: {
        id: "753",
        url: "img/image753",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      756: {
        id: "756",
        url: "img/image756",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      760: {
        id: "760",
        url: "img/image760",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      762: {
        id: "762",
        url: "img/image762",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      764: {
        id: "764",
        url: "img/image764",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      765: {
        id: "765",
        url: "img/image765",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      766: {
        id: "766",
        url: "img/image766",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      767: {
        id: "767",
        url: "img/image767",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      768: {
        id: "768",
        url: "img/image768",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      769: {
        id: "769",
        url: "img/image769",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      773: {
        id: "773",
        url: "img/image773",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      774: {
        id: "774",
        url: "img/image774",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      775: {
        id: "775",
        url: "img/image775",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      776: {
        id: "776",
        url: "img/image776",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      777: {
        id: "777",
        url: "img/image777",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      778: {
        id: "778",
        url: "img/image778",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      779: {
        id: "779",
        url: "img/image779",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      781: {
        id: "781",
        url: "img/image781",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      782: {
        id: "782",
        url: "img/image782",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      783: {
        id: "783",
        url: "img/image783",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      784: {
        id: "784",
        url: "img/image784",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      786: {
        id: "786",
        url: "img/image786",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      787: {
        id: "787",
        url: "img/image787",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      788: {
        id: "788",
        url: "img/image788",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      789: {
        id: "789",
        url: "img/image789",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      790: {
        id: "790",
        url: "img/image790",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      796: {
        id: "796",
        url: "img/image796",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      800: {
        id: "800",
        url: "img/image800",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      804: {
        id: "804",
        url: "img/image804",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      806: {
        id: "806",
        url: "img/image806",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      807: {
        id: "807",
        url: "img/image807",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      808: {
        id: "808",
        url: "img/image808",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      809: {
        id: "809",
        url: "img/image809",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      810: {
        id: "810",
        url: "img/image810",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      811: {
        id: "811",
        url: "img/image811",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      813: {
        id: "813",
        url: "img/image813",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      818: {
        id: "818",
        url: "img/image818",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      822: {
        id: "822",
        url: "img/image822",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      823: {
        id: "823",
        url: "img/image823",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      824: {
        id: "824",
        url: "img/image824",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      825: {
        id: "825",
        url: "img/image825",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      826: {
        id: "826",
        url: "img/image826",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      827: {
        id: "827",
        url: "img/image827",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      828: {
        id: "828",
        url: "img/image828",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      829: {
        id: "829",
        url: "img/image829",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      830: {
        id: "830",
        url: "img/image830",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      833: {
        id: "833",
        url: "img/image833",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      834: {
        id: "834",
        url: "img/image834",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      835: {
        id: "835",
        url: "img/image835",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      837: {
        id: "837",
        url: "img/image837",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      838: {
        id: "838",
        url: "img/image838",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      839: {
        id: "839",
        url: "img/image839",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      840: {
        id: "840",
        url: "img/image840",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      841: {
        id: "841",
        url: "img/image841",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      843: {
        id: "843",
        url: "img/image843",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      844: {
        id: "844",
        url: "img/image844",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      845: {
        id: "845",
        url: "img/image845",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      849: {
        id: "849",
        url: "img/image849",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      850: {
        id: "850",
        url: "img/image850",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      852: {
        id: "852",
        url: "img/image852",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      853: {
        id: "853",
        url: "img/image853",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      854: {
        id: "854",
        url: "img/image854",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      856: {
        id: "856",
        url: "img/image856",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      857: {
        id: "857",
        url: "img/image857",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      858: {
        id: "858",
        url: "img/image858",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      859: {
        id: "859",
        url: "img/image859",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      860: {
        id: "860",
        url: "img/image860",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      861: {
        id: "861",
        url: "img/image861",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      862: {
        id: "862",
        url: "img/image862",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      863: {
        id: "863",
        url: "img/image863",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      864: {
        id: "864",
        url: "img/image864",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      865: {
        id: "865",
        url: "img/image865",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      866: {
        id: "866",
        url: "img/image866",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      867: {
        id: "867",
        url: "img/image867",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      868: {
        id: "868",
        url: "img/image868",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      869: {
        id: "869",
        url: "img/image869",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      870: {
        id: "870",
        url: "img/image870",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      872: {
        id: "872",
        url: "img/image872",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      874: {
        id: "874",
        url: "img/image874",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      879: {
        id: "879",
        url: "img/image879",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      880: {
        id: "880",
        url: "img/image880",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      881: {
        id: "881",
        url: "img/image881",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      884: {
        id: "884",
        url: "img/image884",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      889: {
        id: "889",
        url: "img/image889",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      890: {
        id: "890",
        url: "img/image890",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      891: {
        id: "891",
        url: "img/image891",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      893: {
        id: "893",
        url: "img/image893",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      895: {
        id: "895",
        url: "img/image895",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      896: {
        id: "896",
        url: "img/image896",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      898: {
        id: "898",
        url: "img/image898",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      899: {
        id: "899",
        url: "img/image899",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      902: {
        id: "902",
        url: "img/image902",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      903: {
        id: "903",
        url: "img/image903",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      904: {
        id: "904",
        url: "img/image904",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      906: {
        id: "906",
        url: "img/image906",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      907: {
        id: "907",
        url: "img/image907",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      911: {
        id: "911",
        url: "img/image911",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      912: {
        id: "912",
        url: "img/image912",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      914: {
        id: "914",
        url: "img/image914",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      915: {
        id: "915",
        url: "img/image915",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      916: {
        id: "916",
        url: "img/image916",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      917: {
        id: "917",
        url: "img/image917",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      922: {
        id: "922",
        url: "img/image922",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      925: {
        id: "925",
        url: "img/image925",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      929: {
        id: "929",
        url: "img/image929",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      932: {
        id: "932",
        url: "img/image932",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      935: {
        id: "935",
        url: "img/image935",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      936: {
        id: "936",
        url: "img/image936",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      937: {
        id: "937",
        url: "img/image937",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      938: {
        id: "938",
        url: "img/image938",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      939: {
        id: "939",
        url: "img/image939",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      940: {
        id: "940",
        url: "img/image940",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      941: {
        id: "941",
        url: "img/image941",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      943: {
        id: "943",
        url: "img/image943",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      944: {
        id: "944",
        url: "img/image944",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      946: {
        id: "946",
        url: "img/image946",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      947: {
        id: "947",
        url: "img/image947",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      948: {
        id: "948",
        url: "img/image948",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      950: {
        id: "950",
        url: "img/image950",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      951: {
        id: "951",
        url: "img/image951",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      952: {
        id: "952",
        url: "img/image952",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      954: {
        id: "954",
        url: "img/image954",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      955: {
        id: "955",
        url: "img/image955",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      956: {
        id: "956",
        url: "img/image956",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      957: {
        id: "957",
        url: "img/image957",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      958: {
        id: "958",
        url: "img/image958",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      960: {
        id: "960",
        url: "img/image960",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      961: {
        id: "961",
        url: "img/image961",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      963: {
        id: "963",
        url: "img/image963",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      964: {
        id: "964",
        url: "img/image964",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      965: {
        id: "965",
        url: "img/image965",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      966: {
        id: "966",
        url: "img/image966",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      967: {
        id: "967",
        url: "img/image967",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      969: {
        id: "969",
        url: "img/image969",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      970: {
        id: "970",
        url: "img/image970",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      971: {
        id: "971",
        url: "img/image971",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      972: {
        id: "972",
        url: "img/image972",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      973: {
        id: "973",
        url: "img/image973",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      974: {
        id: "974",
        url: "img/image974",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      975: {
        id: "975",
        url: "img/image975",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      976: {
        id: "976",
        url: "img/image976",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      977: {
        id: "977",
        url: "img/image977",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      978: {
        id: "978",
        url: "img/image978",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      980: {
        id: "980",
        url: "img/image980",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      981: {
        id: "981",
        url: "img/image981",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      982: {
        id: "982",
        url: "img/image982",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      983: {
        id: "983",
        url: "img/image983",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      984: {
        id: "984",
        url: "img/image984",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      985: {
        id: "985",
        url: "img/image985",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      986: {
        id: "986",
        url: "img/image986",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      988: {
        id: "988",
        url: "img/image988",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      989: {
        id: "989",
        url: "img/image989",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      990: {
        id: "990",
        url: "img/image990",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      992: {
        id: "992",
        url: "img/image992",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      995: {
        id: "995",
        url: "img/image995",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      997: {
        id: "997",
        url: "img/image997",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      998: {
        id: "998",
        url: "img/image998",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1001: {
        id: "1001",
        url: "img/image1001",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1003: {
        id: "1003",
        url: "img/image1003",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1004: {
        id: "1004",
        url: "img/image1004",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1005: {
        id: "1005",
        url: "img/image1005",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1006: {
        id: "1006",
        url: "img/image1006",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1007: {
        id: "1007",
        url: "img/image1007",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1008: {
        id: "1008",
        url: "img/image1008",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1009: {
        id: "1009",
        url: "img/image1009",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1010: {
        id: "1010",
        url: "img/image1010",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1011: {
        id: "1011",
        url: "img/image1011",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1012: {
        id: "1012",
        url: "img/image1012",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1013: {
        id: "1013",
        url: "img/image1013",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1014: {
        id: "1014",
        url: "img/image1014",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1015: {
        id: "1015",
        url: "img/image1015",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1016: {
        id: "1016",
        url: "img/image1016",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1017: {
        id: "1017",
        url: "img/image1017",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1018: {
        id: "1018",
        url: "img/image1018",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1019: {
        id: "1019",
        url: "img/image1019",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1022: {
        id: "1022",
        url: "img/image1022",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1023: {
        id: "1023",
        url: "img/image1023",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1026: {
        id: "1026",
        url: "img/image1026",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1027: {
        id: "1027",
        url: "img/image1027",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1028: {
        id: "1028",
        url: "img/image1028",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1029: {
        id: "1029",
        url: "img/image1029",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1030: {
        id: "1030",
        url: "img/image1030",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1032: {
        id: "1032",
        url: "img/image1032",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1033: {
        id: "1033",
        url: "img/image1033",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1036: {
        id: "1036",
        url: "img/image1036",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1037: {
        id: "1037",
        url: "img/image1037",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1038: {
        id: "1038",
        url: "img/image1038",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1040: {
        id: "1040",
        url: "img/image1040",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1042: {
        id: "1042",
        url: "img/image1042",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1043: {
        id: "1043",
        url: "img/image1043",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1045: {
        id: "1045",
        url: "img/image1045",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1046: {
        id: "1046",
        url: "img/image1046",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1047: {
        id: "1047",
        url: "img/image1047",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1048: {
        id: "1048",
        url: "img/image1048",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1049: {
        id: "1049",
        url: "img/image1049",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1050: {
        id: "1050",
        url: "img/image1050",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1051: {
        id: "1051",
        url: "img/image1051",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1052: {
        id: "1052",
        url: "img/image1052",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1053: {
        id: "1053",
        url: "img/image1053",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1054: {
        id: "1054",
        url: "img/image1054",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1055: {
        id: "1055",
        url: "img/image1055",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1056: {
        id: "1056",
        url: "img/image1056",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1057: {
        id: "1057",
        url: "img/image1057",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1058: {
        id: "1058",
        url: "img/image1058",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1059: {
        id: "1059",
        url: "img/image1059",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1061: {
        id: "1061",
        url: "img/image1061",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1062: {
        id: "1062",
        url: "img/image1062",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1063: {
        id: "1063",
        url: "img/image1063",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1064: {
        id: "1064",
        url: "img/image1064",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1065: {
        id: "1065",
        url: "img/image1065",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1067: {
        id: "1067",
        url: "img/image1067",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1068: {
        id: "1068",
        url: "img/image1068",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1070: {
        id: "1070",
        url: "img/image1070",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1071: {
        id: "1071",
        url: "img/image1071",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1072: {
        id: "1072",
        url: "img/image1072",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1074: {
        id: "1074",
        url: "img/image1074",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1075: {
        id: "1075",
        url: "img/image1075",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1076: {
        id: "1076",
        url: "img/image1076",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1077: {
        id: "1077",
        url: "img/image1077",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1078: {
        id: "1078",
        url: "img/image1078",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1079: {
        id: "1079",
        url: "img/image1079",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1080: {
        id: "1080",
        url: "img/image1080",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1081: {
        id: "1081",
        url: "img/image1081",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1083: {
        id: "1083",
        url: "img/image1083",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1084: {
        id: "1084",
        url: "img/image1084",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1085: {
        id: "1085",
        url: "img/image1085",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1086: {
        id: "1086",
        url: "img/image1086",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1087: {
        id: "1087",
        url: "img/image1087",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1088: {
        id: "1088",
        url: "img/image1088",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1089: {
        id: "1089",
        url: "img/image1089",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1090: {
        id: "1090",
        url: "img/image1090",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1091: {
        id: "1091",
        url: "img/image1091",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1092: {
        id: "1092",
        url: "img/image1092",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1093: {
        id: "1093",
        url: "img/image1093",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1094: {
        id: "1094",
        url: "img/image1094",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1096: {
        id: "1096",
        url: "img/image1096",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1097: {
        id: "1097",
        url: "img/image1097",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1098: {
        id: "1098",
        url: "img/image1098",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1099: {
        id: "1099",
        url: "img/image1099",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1100: {
        id: "1100",
        url: "img/image1100",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1102: {
        id: "1102",
        url: "img/image1102",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1103: {
        id: "1103",
        url: "img/image1103",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1105: {
        id: "1105",
        url: "img/image1105",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1106: {
        id: "1106",
        url: "img/image1106",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1107: {
        id: "1107",
        url: "img/image1107",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1108: {
        id: "1108",
        url: "img/image1108",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1109: {
        id: "1109",
        url: "img/image1109",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1110: {
        id: "1110",
        url: "img/image1110",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1111: {
        id: "1111",
        url: "img/image1111",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1112: {
        id: "1112",
        url: "img/image1112",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1113: {
        id: "1113",
        url: "img/image1113",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1114: {
        id: "1114",
        url: "img/image1114",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1116: {
        id: "1116",
        url: "img/image1116",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1117: {
        id: "1117",
        url: "img/image1117",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1118: {
        id: "1118",
        url: "img/image1118",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1119: {
        id: "1119",
        url: "img/image1119",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1120: {
        id: "1120",
        url: "img/image1120",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1122: {
        id: "1122",
        url: "img/image1122",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1124: {
        id: "1124",
        url: "img/image1124",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1125: {
        id: "1125",
        url: "img/image1125",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1126: {
        id: "1126",
        url: "img/image1126",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1127: {
        id: "1127",
        url: "img/image1127",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1128: {
        id: "1128",
        url: "img/image1128",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1129: {
        id: "1129",
        url: "img/image1129",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1130: {
        id: "1130",
        url: "img/image1130",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1131: {
        id: "1131",
        url: "img/image1131",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1132: {
        id: "1132",
        url: "img/image1132",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1133: {
        id: "1133",
        url: "img/image1133",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1134: {
        id: "1134",
        url: "img/image1134",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1135: {
        id: "1135",
        url: "img/image1135",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1136: {
        id: "1136",
        url: "img/image1136",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1137: {
        id: "1137",
        url: "img/image1137",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1138: {
        id: "1138",
        url: "img/image1138",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1139: {
        id: "1139",
        url: "img/image1139",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1141: {
        id: "1141",
        url: "img/image1141",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1142: {
        id: "1142",
        url: "img/image1142",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1143: {
        id: "1143",
        url: "img/image1143",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1145: {
        id: "1145",
        url: "img/image1145",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1146: {
        id: "1146",
        url: "img/image1146",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1147: {
        id: "1147",
        url: "img/image1147",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1148: {
        id: "1148",
        url: "img/image1148",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1150: {
        id: "1150",
        url: "img/image1150",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1151: {
        id: "1151",
        url: "img/image1151",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1152: {
        id: "1152",
        url: "img/image1152",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1153: {
        id: "1153",
        url: "img/image1153",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1154: {
        id: "1154",
        url: "img/image1154",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1155: {
        id: "1155",
        url: "img/image1155",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1156: {
        id: "1156",
        url: "img/image1156",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1157: {
        id: "1157",
        url: "img/image1157",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1159: {
        id: "1159",
        url: "img/image1159",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1161: {
        id: "1161",
        url: "img/image1161",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1162: {
        id: "1162",
        url: "img/image1162",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1163: {
        id: "1163",
        url: "img/image1163",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1164: {
        id: "1164",
        url: "img/image1164",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1165: {
        id: "1165",
        url: "img/image1165",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1166: {
        id: "1166",
        url: "img/image1166",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1168: {
        id: "1168",
        url: "img/image1168",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1169: {
        id: "1169",
        url: "img/image1169",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1171: {
        id: "1171",
        url: "img/image1171",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1172: {
        id: "1172",
        url: "img/image1172",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1173: {
        id: "1173",
        url: "img/image1173",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1174: {
        id: "1174",
        url: "img/image1174",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1175: {
        id: "1175",
        url: "img/image1175",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1177: {
        id: "1177",
        url: "img/image1177",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1181: {
        id: "1181",
        url: "img/image1181",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1182: {
        id: "1182",
        url: "img/image1182",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1183: {
        id: "1183",
        url: "img/image1183",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1185: {
        id: "1185",
        url: "img/image1185",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1187: {
        id: "1187",
        url: "img/image1187",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1188: {
        id: "1188",
        url: "img/image1188",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1190: {
        id: "1190",
        url: "img/image1190",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1191: {
        id: "1191",
        url: "img/image1191",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1192: {
        id: "1192",
        url: "img/image1192",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1193: {
        id: "1193",
        url: "img/image1193",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1194: {
        id: "1194",
        url: "img/image1194",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1196: {
        id: "1196",
        url: "img/image1196",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1197: {
        id: "1197",
        url: "img/image1197",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1198: {
        id: "1198",
        url: "img/image1198",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1199: {
        id: "1199",
        url: "img/image1199",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1200: {
        id: "1200",
        url: "img/image1200",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1201: {
        id: "1201",
        url: "img/image1201",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1202: {
        id: "1202",
        url: "img/image1202",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1203: {
        id: "1203",
        url: "img/image1203",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1206: {
        id: "1206",
        url: "img/image1206",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1207: {
        id: "1207",
        url: "img/image1207",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1208: {
        id: "1208",
        url: "img/image1208",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1209: {
        id: "1209",
        url: "img/image1209",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1211: {
        id: "1211",
        url: "img/image1211",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1212: {
        id: "1212",
        url: "img/image1212",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1213: {
        id: "1213",
        url: "img/image1213",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1214: {
        id: "1214",
        url: "img/image1214",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1217: {
        id: "1217",
        url: "img/image1217",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1218: {
        id: "1218",
        url: "img/image1218",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1219: {
        id: "1219",
        url: "img/image1219",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1220: {
        id: "1220",
        url: "img/image1220",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1221: {
        id: "1221",
        url: "img/image1221",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1223: {
        id: "1223",
        url: "img/image1223",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1224: {
        id: "1224",
        url: "img/image1224",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1225: {
        id: "1225",
        url: "img/image1225",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1227: {
        id: "1227",
        url: "img/image1227",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1228: {
        id: "1228",
        url: "img/image1228",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1229: {
        id: "1229",
        url: "img/image1229",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1230: {
        id: "1230",
        url: "img/image1230",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1231: {
        id: "1231",
        url: "img/image1231",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1232: {
        id: "1232",
        url: "img/image1232",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1234: {
        id: "1234",
        url: "img/image1234",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1235: {
        id: "1235",
        url: "img/image1235",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1236: {
        id: "1236",
        url: "img/image1236",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1237: {
        id: "1237",
        url: "img/image1237",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1238: {
        id: "1238",
        url: "img/image1238",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1239: {
        id: "1239",
        url: "img/image1239",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1240: {
        id: "1240",
        url: "img/image1240",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1242: {
        id: "1242",
        url: "img/image1242",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1244: {
        id: "1244",
        url: "img/image1244",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1245: {
        id: "1245",
        url: "img/image1245",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1246: {
        id: "1246",
        url: "img/image1246",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1247: {
        id: "1247",
        url: "img/image1247",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1249: {
        id: "1249",
        url: "img/image1249",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1250: {
        id: "1250",
        url: "img/image1250",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1251: {
        id: "1251",
        url: "img/image1251",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1252: {
        id: "1252",
        url: "img/image1252",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1253: {
        id: "1253",
        url: "img/image1253",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1254: {
        id: "1254",
        url: "img/image1254",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1256: {
        id: "1256",
        url: "img/image1256",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1257: {
        id: "1257",
        url: "img/image1257",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1258: {
        id: "1258",
        url: "img/image1258",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1259: {
        id: "1259",
        url: "img/image1259",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1260: {
        id: "1260",
        url: "img/image1260",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1261: {
        id: "1261",
        url: "img/image1261",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1262: {
        id: "1262",
        url: "img/image1262",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1263: {
        id: "1263",
        url: "img/image1263",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1265: {
        id: "1265",
        url: "img/image1265",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1266: {
        id: "1266",
        url: "img/image1266",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1267: {
        id: "1267",
        url: "img/image1267",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1268: {
        id: "1268",
        url: "img/image1268",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1269: {
        id: "1269",
        url: "img/image1269",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1270: {
        id: "1270",
        url: "img/image1270",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1271: {
        id: "1271",
        url: "img/image1271",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1272: {
        id: "1272",
        url: "img/image1272",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1273: {
        id: "1273",
        url: "img/image1273",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1275: {
        id: "1275",
        url: "img/image1275",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1276: {
        id: "1276",
        url: "img/image1276",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1277: {
        id: "1277",
        url: "img/image1277",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1278: {
        id: "1278",
        url: "img/image1278",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1279: {
        id: "1279",
        url: "img/image1279",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1280: {
        id: "1280",
        url: "img/image1280",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1281: {
        id: "1281",
        url: "img/image1281",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1282: {
        id: "1282",
        url: "img/image1282",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1283: {
        id: "1283",
        url: "img/image1283",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1284: {
        id: "1284",
        url: "img/image1284",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1285: {
        id: "1285",
        url: "img/image1285",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1287: {
        id: "1287",
        url: "img/image1287",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1288: {
        id: "1288",
        url: "img/image1288",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1289: {
        id: "1289",
        url: "img/image1289",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1290: {
        id: "1290",
        url: "img/image1290",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1291: {
        id: "1291",
        url: "img/image1291",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1292: {
        id: "1292",
        url: "img/image1292",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1293: {
        id: "1293",
        url: "img/image1293",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1294: {
        id: "1294",
        url: "img/image1294",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1295: {
        id: "1295",
        url: "img/image1295",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1296: {
        id: "1296",
        url: "img/image1296",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1297: {
        id: "1297",
        url: "img/image1297",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1298: {
        id: "1298",
        url: "img/image1298",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1299: {
        id: "1299",
        url: "img/image1299",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1300: {
        id: "1300",
        url: "img/image1300",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1301: {
        id: "1301",
        url: "img/image1301",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1302: {
        id: "1302",
        url: "img/image1302",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1303: {
        id: "1303",
        url: "img/image1303",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1304: {
        id: "1304",
        url: "img/image1304",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1305: {
        id: "1305",
        url: "img/image1305",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1306: {
        id: "1306",
        url: "img/image1306",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1307: {
        id: "1307",
        url: "img/image1307",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1308: {
        id: "1308",
        url: "img/image1308",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1309: {
        id: "1309",
        url: "img/image1309",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1310: {
        id: "1310",
        url: "img/image1310",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1311: {
        id: "1311",
        url: "img/image1311",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1312: {
        id: "1312",
        url: "img/image1312",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1313: {
        id: "1313",
        url: "img/image1313",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1314: {
        id: "1314",
        url: "img/image1314",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1315: {
        id: "1315",
        url: "img/image1315",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1316: {
        id: "1316",
        url: "img/image1316",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1317: {
        id: "1317",
        url: "img/image1317",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1318: {
        id: "1318",
        url: "img/image1318",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1319: {
        id: "1319",
        url: "img/image1319",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1321: {
        id: "1321",
        url: "img/image1321",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1322: {
        id: "1322",
        url: "img/image1322",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1323: {
        id: "1323",
        url: "img/image1323",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1324: {
        id: "1324",
        url: "img/image1324",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1326: {
        id: "1326",
        url: "img/image1326",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1327: {
        id: "1327",
        url: "img/image1327",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1328: {
        id: "1328",
        url: "img/image1328",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1329: {
        id: "1329",
        url: "img/image1329",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1330: {
        id: "1330",
        url: "img/image1330",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1331: {
        id: "1331",
        url: "img/image1331",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1332: {
        id: "1332",
        url: "img/image1332",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1333: {
        id: "1333",
        url: "img/image1333",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1334: {
        id: "1334",
        url: "img/image1334",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1335: {
        id: "1335",
        url: "img/image1335",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1336: {
        id: "1336",
        url: "img/image1336",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1338: {
        id: "1338",
        url: "img/image1338",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1339: {
        id: "1339",
        url: "img/image1339",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1340: {
        id: "1340",
        url: "img/image1340",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1341: {
        id: "1341",
        url: "img/image1341",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1342: {
        id: "1342",
        url: "img/image1342",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1343: {
        id: "1343",
        url: "img/image1343",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1344: {
        id: "1344",
        url: "img/image1344",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1345: {
        id: "1345",
        url: "img/image1345",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1346: {
        id: "1346",
        url: "img/image1346",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1348: {
        id: "1348",
        url: "img/image1348",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1349: {
        id: "1349",
        url: "img/image1349",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1350: {
        id: "1350",
        url: "img/image1350",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1351: {
        id: "1351",
        url: "img/image1351",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1352: {
        id: "1352",
        url: "img/image1352",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1353: {
        id: "1353",
        url: "img/image1353",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1354: {
        id: "1354",
        url: "img/image1354",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1355: {
        id: "1355",
        url: "img/image1355",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1356: {
        id: "1356",
        url: "img/image1356",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1357: {
        id: "1357",
        url: "img/image1357",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1358: {
        id: "1358",
        url: "img/image1358",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1359: {
        id: "1359",
        url: "img/image1359",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1360: {
        id: "1360",
        url: "img/image1360",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1361: {
        id: "1361",
        url: "img/image1361",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1362: {
        id: "1362",
        url: "img/image1362",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1363: {
        id: "1363",
        url: "img/image1363",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1364: {
        id: "1364",
        url: "img/image1364",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1365: {
        id: "1365",
        url: "img/image1365",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1366: {
        id: "1366",
        url: "img/image1366",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1367: {
        id: "1367",
        url: "img/image1367",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1368: {
        id: "1368",
        url: "img/image1368",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1369: {
        id: "1369",
        url: "img/image1369",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1370: {
        id: "1370",
        url: "img/image1370",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1371: {
        id: "1371",
        url: "img/image1371",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1372: {
        id: "1372",
        url: "img/image1372",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1373: {
        id: "1373",
        url: "img/image1373",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1374: {
        id: "1374",
        url: "img/image1374",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1375: {
        id: "1375",
        url: "img/image1375",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1376: {
        id: "1376",
        url: "img/image1376",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1377: {
        id: "1377",
        url: "img/image1377",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1378: {
        id: "1378",
        url: "img/image1378",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1379: {
        id: "1379",
        url: "img/image1379",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1380: {
        id: "1380",
        url: "img/image1380",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1381: {
        id: "1381",
        url: "img/image1381",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1382: {
        id: "1382",
        url: "img/image1382",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1383: {
        id: "1383",
        url: "img/image1383",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1384: {
        id: "1384",
        url: "img/image1384",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1385: {
        id: "1385",
        url: "img/image1385",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1386: {
        id: "1386",
        url: "img/image1386",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1387: {
        id: "1387",
        url: "img/image1387",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1388: {
        id: "1388",
        url: "img/image1388",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1389: {
        id: "1389",
        url: "img/image1389",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1390: {
        id: "1390",
        url: "img/image1390",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1391: {
        id: "1391",
        url: "img/image1391",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1393: {
        id: "1393",
        url: "img/image1393",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1394: {
        id: "1394",
        url: "img/image1394",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1395: {
        id: "1395",
        url: "img/image1395",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1396: {
        id: "1396",
        url: "img/image1396",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1397: {
        id: "1397",
        url: "img/image1397",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1398: {
        id: "1398",
        url: "img/image1398",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1399: {
        id: "1399",
        url: "img/image1399",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1400: {
        id: "1400",
        url: "img/image1400",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1406: {
        id: "1406",
        url: "img/image1406",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1407: {
        id: "1407",
        url: "img/image1407",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1408: {
        id: "1408",
        url: "img/image1408",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1409: {
        id: "1409",
        url: "img/image1409",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1410: {
        id: "1410",
        url: "img/image1410",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1411: {
        id: "1411",
        url: "img/image1411",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1412: {
        id: "1412",
        url: "img/image1412",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1413: {
        id: "1413",
        url: "img/image1413",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1414: {
        id: "1414",
        url: "img/image1414",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1415: {
        id: "1415",
        url: "img/image1415",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1416: {
        id: "1416",
        url: "img/image1416",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1417: {
        id: "1416",
        url: "img/image1417",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      },
      1418: {
        id: "1416",
        url: "img/image1418",
        author: "",
        authorUrl: "",
        tags: "",
        toys: "",
        clothes: ""
      }
    };
  }
}
class u {
  static get ImagesData() {
    return n.Data;
  }
  static get MajorsImages() {
    return {
      1: 1373,
      2: 1383,
      3: 566,
      5: 944,
      6: 103,
      7: 1399,
      8: 116,
      9: 1278,
      10: 1114,
      11: 491,
      12: 1346,
      13: 114,
      15: 459
    };
  }
  static get ClassesImages() {
    return {
      1001: 1316,
      1002: 1339,
      1003: 1326,
      1004: 1004,
      1005: 1005,
      1006: 1006,
      1007: 1007,
      1008: 1008,
      1009: 1009,
      1010: 1010,
      1011: 1011,
      1012: 1012,
      1013: 1013,
      1014: 1014,
      1015: 1015,
      101: 963,
      201: 939,
      301: 940,
      401: 958,
      102: 62,
      302: 46,
      402: 1359,
      103: 12,
      203: 1212,
      303: 152,
      403: 66,
      104: 1410,
      204: 156,
      304: 1083,
      404: 1367,
      105: 610,
      305: 516,
      405: 670,
      106: 60,
      306: 70,
      406: 61,
      107: 509,
      207: 521,
      307: 527,
      407: 531,
      118: 433,
      218: 653,
      318: 279,
      418: 496,
      209: 1068,
      309: 809,
      409: 372,
      213: 1074,
      313: 1377,
      413: 1379,
      211: 37,
      311: 45,
      212: 27,
      312: 1414,
      214: 767,
      314: 1387,
      414: 1097,
      215: 1134,
      415: 823,
      216: 55,
      316: 19,
      416: 39,
      217: 790,
      317: 431,
      417: 118,
      108: 911,
      308: 1239,
      408: 1157,
      110: 395,
      210: 1289,
      310: 413,
      410: 1289,
      220: 1096,
      320: 1136,
      420: 984
    };
  }
  static get PartnersImages() {
    return {
      1: 1382,
      2: 955,
      3: 1357,
      4: 510,
      5: 872,
      6: 941,
      8: 104,
      11: 366,
      12: 1090,
      1000: 563
    };
  }
  static get ClubsImages() {
    return {
      1: 1381,
      2: 856,
      3: 409,
      4: 3,
      5: 229,
      6: 398,
      7: 504,
      8: 584,
      9: 421,
      10: 161,
      11: 575,
      12: 1378,
      13: 1042,
      14: 1376,
      15: 1372,
      16: 41,
      17: 74,
      18: 397,
      19: 532,
      20: 568,
      21: 188,
      22: 387,
      23: 260,
      24: 526,
      25: 569
    };
  }
  static get PunishmentsImages() {
    return {
      1: 85,
      2: 268,
      3: 2,
      4: 1375,
      5: 966,
      6: 93,
      7: 1063,
      8: 1374,
      9: 86,
      10: 101,
      11: 1341,
      12: 1395,
      13: 585,
      14: 862,
      15: 441,
      16: 952,
      17: 98,
      18: 1103,
      19: 1370,
      20: 1391,
      21: 1417,
      22: 1369,
      23: 57,
      24: 1394,
      25: 100,
      26: 71,
      27: 1415,
      28: 63,
      29: 317,
      30: 125,
      31: 231,
      32: 541,
      33: 225,
      34: 102,
      35: 546,
      36: 1350,
      37: 1296,
      38: 1416,
      39: 1345,
      40: 1418,
      41: 196,
      42: 1331,
      43: 1352,
      44: 1017,
      45: 1188,
      46: 1105,
      47: 1053
    };
  }
}
class d {
  static getImage(t, e) {
    let a;
    if (t && e) {
      let s;
      switch (e) {
        case "major":
          s = u.MajorsImages[t];
          a = u.ImagesData[s];
          break;
        case "class":
          s = u.ClassesImages[t];
          a = u.ImagesData[s];
          break;
        case "partner":
          s = u.PartnersImages[t];
          a = u.ImagesData[s];
          break;
        case "club":
          s = u.ClubsImages[t];
          a = u.ImagesData[s];
          break;
        case "punishment":
          s = u.PunishmentsImages[t];
          a = u.ImagesData[s];
      }
    } else if (t) {
      a = u.ImagesData[t];
    } else {
      u.ImagesData;
    }
    if (a == null) {
      a = {
        imgUrl: "default.jpg"
      };
    }
    return a;
  }
}
class c {
  static view(t) {
    c.LoadHtml();
    c.LoadData();
  }
  static LoadHtml() {
    $("main").html("\n        <div class=\"container text-center\">\n        <h1>主修专业:</h1>\n        <div class=\"card-container\">\n\n        </div>\n    </div>");
  }
  static LoadData() {
    let t = l.getMajorsData();
    let e = l.getCompletedMajors();
    let a = l.getCurrentMajorId();
    let s = $(".card-container");
    let r = $("<div class=\"row\">");
    for (let s in t) {
      let i = t[s];
      if (i.community) {
        continue;
      }
      let o = $("<div class=\"col-auto\">");
      let l = $("<div class=\"card\" >");
      let n = d.getImage(s, "major").url;
      let u = a == s;
      l.append($(`<img class="card-img-top hoverable" src="${n}.webp" onerror="this.onerror=null; this.src='${n}.jpg'" alt="${i.name}">`).on("click", function () {
        let t = {
          entityType: "major",
          entityId: s
        };
        dt.ViewMajor(t);
      })).append($("<h4 class=\"card-title\">").text(i.name).append($(`<h6>${i.name2}</h6>`)));
      if (e.find(t => t == s)) {
        l.append($("<div class=\"indicator-complete\">Completed</div>"));
      } else if (u) {
        l.append($("<div class=\"indicator-active\">已激活专业</div>"));
      }
      $(r).append(o.append(l));
    }
    s.append(r);
  }
}
class h {
  static getPunishmentsData() {
    return o.punishmentsData;
  }
  static getCurrentPunishments() {
    return JSON.parse(localStorage.getItem("currentPunishments"));
  }
  static getMaxPunishments() {
    return s.MAX_PUNISHMENTS;
  }
  static getPunishmentsDoneNum() {
    return localStorage.getItem("punishmentsDoneNum");
  }
  static getActivePunishmentsNum() {
    return h.getCurrentPunishments().length;
  }
  static getPunishmentById(t) {
    return h.getPunishmentsData()[Number(t)];
  }
  static IsUnlockedHardPunishments() {
    return r.currentCredits() >= s.REQUIRED_CREDITS_UNLOCK_PUNISHMENTS;
  }
  static IsUnlockedHardcorePunishments() {
    return JSON.parse(localStorage.getItem("hardcorePunishmentsStatus"));
  }
  static setUnlockedHardcorePunishments(t) {
    localStorage.setItem("hardcorePunishmentsStatus", JSON.stringify(t));
  }
}
class g {
  static increaseActivePerksNum() {
    let t = localStorage.getItem("activePerksNum");
    t++;
    localStorage.setItem("activePerksNum", t);
  }
  static decreaseActivePerksNum() {
    let t = localStorage.getItem("activePerksNum");
    t--;
    localStorage.setItem("activePerksNum", t);
  }
  static setActivePerksNum(t) {
    localStorage.setItem("activePerksNum", t);
  }
  static getActiveClubPerks() {
    return JSON.parse(localStorage.getItem("activePerks"));
  }
  static setActivePerks(t) {
    localStorage.setItem("activePerks", JSON.stringify(t));
  }
  static getActivePerksNum() {
    return JSON.parse(localStorage.getItem("activePerksNum"));
  }
  static getMaxActivePerks() {
    return JSON.parse(localStorage.getItem("maxActivePerks"));
  }
  static getActivePartnerPerks() {
    return JSON.parse(localStorage.getItem("activePartnerPerks"));
  }
  static setActivePartnerPerks(t) {
    return localStorage.setItem("activePartnerPerks", JSON.stringify(t));
  }
}
class m {
  static getPercentageDifferenceBetweenTwoNumbers(t, e) {
    return Math.abs((t - e) / t * 100);
  }
  static debug(t, e) {
    if (e) {
      console.log(e);
    }
    alert(t);
  }
  static handleAjaxError(t) {
    console.log(t);
    alert("错误,见F12控制台");
  }
  static generateRandomIndex(t) {
    return Math.floor(Math.random() * t);
  }
  static traversePrerequisites(t) {
    let e = [];
    (function t(a) {
      let s = a.prerequisites.split(" ").filter(t => t);
      if (s.length == 0) {
        return;
      }
      for (let a of s) {
        let s = f.getClassesData()[a];
        e.push(s.id);
        t(s);
      }
    })(t);
    return Array.from(new Set(e.sort((t, e) => t - e)));
  }
}
class p {
  static getClubsData() {
    return o.clubsData;
  }
  static getActiveClubs() {
    return JSON.parse(localStorage.getItem("activeClubs"));
  }
  static getMaxActiveClubs() {
    return JSON.parse(localStorage.getItem("maxActiveClubs"));
  }
  static addActiveClub(t) {
    let e = p.getActiveClubs();
    e.push(t);
    localStorage.setItem("activeClubs", JSON.stringify(e));
  }
  static resetActiveClubs() {
    localStorage.setItem("activeClubs", JSON.stringify([]));
    g.setActivePerks([]);
    localStorage.setItem("activePerks", JSON.stringify([]));
    localStorage.setItem("activePerksNum", "0");
    localStorage.setItem("maxActiveClubs", JSON.stringify(s.MAX_CLUBS));
    localStorage.setItem("maxActivePerks", JSON.stringify(s.MAX_PERKS));
  }
  static setClassSkipsAvailable(t) {
    localStorage.setItem("classSkipsAvailable", t);
  }
  static getClubById(t) {
    return p.getClubsData()[Number(t)];
  }
}
class y {
  static getPartnersData() {
    return o.partnersData;
  }
  static setPartnersData(t) {
    localStorage.setItem("partnersData", JSON.stringify(t));
  }
  static getActivePartners() {
    return JSON.parse(localStorage.getItem("activePartners"));
  }
  static setActivePartners(t) {
    localStorage.setItem("activePartners", JSON.stringify(t));
  }
  static getPartnerById(t) {
    return y.getPartnersData()[Number(t)];
  }
  static resetActivePartners() {
    localStorage.setItem("activePartners", JSON.stringify([]));
    localStorage.setItem("activePartnerPerks", JSON.stringify([]));
  }
}
class b {
  static getTasksTimers() {
    return JSON.parse(localStorage.getItem("tasks"));
  }
  static setTasksTimers(t) {
    localStorage.setItem("tasks", JSON.stringify(t));
  }
  static addTaskTimer(t) {
    let e = b.getTasksTimers();
    e.push(t);
    b.setTasksTimers(e);
  }
  static removeTaskTimer(t) {
    let e = b.getTasksTimers();
    let a = e.findIndex(e => e.sourceId == t.sourceId);
    if (a >= 0) {
      e.splice(a, 1);
      b.setTasksTimers(e);
    }
  }
  static getTaskSource(t) {
    let e;
    switch (task.sourceType) {
      case "major":
        e = l.getMajorById(task.sourceId);
        break;
      case "class":
        e = f.getClassById(task.sourceId);
        break;
      case "punishment":
        e = h.getPunishmentById(task.sourceId);
        break;
      case "club":
        e = p.getClubById(task.sourceId);
        break;
      case "partner":
        e = y.getPartnersData[task.sourceId];
    }
    return e;
  }
  static resetTasks() {
    localStorage.setItem("tasks", JSON.stringify([]));
  }
}
class f {
  static getClassDailyTaskcredits(t) {
    switch (t.tier) {
      case "beginner":
        return s.CLASS_BEGINNER_CREDITS;
      case "intermediate":
        return s.CLASS_INTERMEDIATE_CREDITS;
      case "advanced":
        return s.CLASS_ADVANCED_CREDITS;
      case "master":
        return s.CLASS_MASTER_CREDITS;
      default:
        return 0;
    }
  }
  static getClassesData() {
    return o.classesData;
  }
  static getCurrentClasses() {
    return JSON.parse(localStorage.getItem("currentClasses"));
  }
  static setCurrentClasses(t) {
    localStorage.setItem("currentClasses", JSON.stringify(t));
  }
  static getCompletedClasses() {
    return JSON.parse(localStorage.getItem("completedClasses"));
  }
  static setCompletedClasses(t) {
    localStorage.setItem("completedClasses", JSON.stringify(t));
  }
  static getAttendedClasses() {
    return JSON.parse(localStorage.getItem("attendedClasses"));
  }
  static setAttendedClasses(t) {
    localStorage.setItem("attendedClasses", JSON.stringify(t));
  }
  static getAttendedClassesToday() {
    return JSON.parse(localStorage.getItem("attendedClassesToday"));
  }
  static setAttendedClassesToday(t) {
    localStorage.setItem("attendedClassesToday", JSON.stringify(t));
  }
  static getClassSkipsAvailable() {
    return localStorage.getItem("classSkipsAvailable");
  }
  static getTodayClasses() {
    return JSON.parse(localStorage.getItem("todayClasses"));
  }
  static setTodayClasses(t) {
    localStorage.setItem("todayClasses", JSON.stringify(t));
  }
  static getClassById(t) {
    return f.getClassesData()[Number(t)];
  }
  static resetClasses() {
    localStorage.setItem("currentClasses", JSON.stringify([]));
    localStorage.setItem("todayClasses", JSON.stringify([]));
    b.resetTasks();
  }
}
class w {
  static view(t) {
    w.LoadHtml();
    w.LoadData();
  }
  static LoadHtml() {
    $("main").html("\n        <div class=\"container text-center\">\n        <h1 class=\"text text-center\">课程列表</h1>\n        <div class=\"card-container\">\n            <h3 class=\"green-light hoverable\" data-toggle=\"collapse\"\n                href=\"#beginner-classes-container\" role=\"button\" aria-expanded=\"true\"\n                aria-controls=\"beginner-classes-container\">\n                入门课程:\n            </h3>\n            <p>完成入门课程任务获得1学分，通过课程考试获得3学分。.</p>\n            <div id=\"beginner-classes-container\" class=\"row partners-container collapse show\"></div>\n\n\n            <h3 class=\"green-med hoverable\" data-toggle=\"collapse\"\n                href=\"#intermediate-classes-container\" role=\"button\" aria-expanded=\"true\"\n                aria-controls=\"intermediate-classes-container\">\n                普通课程:\n            </h3>\n            <p>完成普通课程任务获得2学分，通过课程考试获得6学分。需要20学分解锁。</p>\n            <div id=\"intermediate-classes-container\" class=\"row intermediate-classes-container collapse show\"></div>\n\n\n            <h3 class=\"cyan-med hoverable\" data-toggle=\"collapse\"\n                href=\"#advanced-classes-container\" role=\"button\" aria-expanded=\"true\"\n                aria-controls=\"advanced-classes-container\">\n                高级课程:\n            </h3>\n            <p>完成高级课程任务获得3学分，通过课程考试获得9学分。需要50学分解锁。</p>\n            <div id=\"advanced-classes-container\" class=\"row advanced-classes-container collapse show\"></div>\n\n\n            <h3 class=\"blue-med hoverable\" data-toggle=\"collapse\"\n                href=\"#master-classes-container\" role=\"button\" aria-expanded=\"true\"\n                aria-controls=\"master-classes-container\">\n                大师课程:\n            </h3>\n            <p>完成大师课程任务获得4学分，通过课程考试获得12学分。需要100学分解锁。</p>\n            <div id=\"master-classes-container\" class=\"row partners-container collapse show\">\n            </div>\n        </div>\n    </div>");
  }
  static LoadData() {
    let t = f.getClassesData();
    let e = f.getCompletedClasses();
    let a = f.getCurrentClasses();
    let i = $("#beginner-classes-container");
    let o = $("#intermediate-classes-container");
    let l = $("#advanced-classes-container");
    let n = $("#master-classes-container");
    for (let u in t) {
      let c = t[u];
      if (c.community) {
        continue;
      }
      let h = false;
      let g = c.prerequisites.split(" ").filter(t => t);
      for (let t of g) {
        if (!e.some(e => e == t)) {
          h = true;
        }
      }
      if (c.tier == "intermediate" && Number(r.currentCredits()) < s.REQUIRED_CREDITS_UNLOCK_INTERMEDIATE) {
        h = true;
      } else if (c.tier == "advanced" && Number(r.currentCredits()) < s.REQUIRED_CREDITS_UNLOCK_ADVANCED) {
        h = true;
      } else if (c.tier == "master" && Number(r.currentCredits()) < s.REQUIRED_CREDITS_UNLOCK_MASTER) {
        h = true;
      }
      let m = e.some(t => t == u);
      let p = a.some(t => t == u);
      let y = $("<div class=\"col-auto\">");
      let b = d.getImage(c.id, "class").url;
      let f = $("<div class=\"card border-secondary\" >");
      f.append($(`<img class="card-img-top hoverable" src="${b}.webp" onerror="this.onerror=null; this.src='${b}.jpg'" alt="${c.name}">`)).on("click", function () {
        let t = {
          entityType: "class",
          entityId: u
        };
        dt.ViewClass(t);
      }).append($("<h4 class=\"card-title\">").text(c.name).append($(`<h6>${c.name2}</h6>`)));
      if (h) {
        f.append($("<div class=\"indicator-locked\">未解锁</div>"));
      } else if (m) {
        f.append($("<div class=\"indicator-complete\">Completed</div>"));
      } else if (p) {
        f.append($("<div class=\"indicator-active\">课程已激活</div>"));
      }
      if (c.tier === "beginner") {
        $(i).append(y.append(f));
      } else if (c.tier === "intermediate") {
        $(o).append(y.append(f));
      } else if (c.tier === "advanced") {
        $(l).append(y.append(f));
      } else if (c.tier === "master") {
        $(n).append(y.append(f));
      }
    }
  }
}
class U {
  static setClassSkipsAvailable(t) {
    localStorage.setItem("classSkipsAvailable", JSON.stringify(t));
  }
  static clubActivitiesDoneNum(t) {
    localStorage.setItem("clubActivitiesDoneNum", JSON.stringify(t));
  }
  static submittedProgressTodayTrue() {
    localStorage.setItem("IsSubmittedProgressToday", "true");
  }
  static submittedProgressTodayFalse() {
    localStorage.setItem("IsSubmittedProgressToday", "false");
  }
}
class v {
  static increaseCredits(t) {
    let e = v.getCredits();
    let a = Number(e) + Number(t);
    v.setCredits(a);
  }
  static decreaseCredits(t) {
    let e = v.getCredits();
    let a = Number(e) - Number(t);
    v.setCredits(a);
  }
  static setCredits(t) {
    let e = Number(t);
    localStorage.setItem("currentCredits", JSON.stringify(e));
  }
  static getCredits() {
    let t = localStorage.getItem("currentCredits");
    return Number(t);
  }
  static increaseRequiredCredits(t) {
    let e = v.getRequiredCredits();
    let a = Number(e) + Number(t);
    v.setRequiredCredits(a);
  }
  static getRequiredCredits() {
    return localStorage.getItem("requiredCredits");
  }
  static setRequiredCredits(t) {
    if (!t) {
      m.debug("Required credits bugged. See console", t);
    }
    return localStorage.setItem("requiredCredits", JSON.stringify(t));
  }
  static resetRequiredCredits() {
    localStorage.setItem("requiredCredits", JSON.stringify(s.REQUIRED_CREDITS_GRADUATION));
  }
}
class k {
  static getLastDate() {
    return JSON.parse(localStorage.getItem("lastDate"));
  }
  static setLastDate(t) {
    localStorage.setItem("lastDate", JSON.stringify(t));
  }
}
class x {
  static entityApplyMultipliersToText(t) {
    for (let e in t) {
      t[e] = x.applyMultipliersToText(t[e], t.tags);
    }
    return t;
  }
  static applyMultipliersToText(t, e) {
    let a = 0;
    if (e) {
      a = S.getTagMultiplier(e);
    }
    let s = S.getFinalTaskMultiplier() + a;
    return t = function (t) {
      let e;
      let a = /(?: )([0-9]+)(?:times.)/g;
      while ((e = a.exec(t)) !== null) {
        if (e.index === a.lastIndex) {
          a.lastIndex++;
        }
        let r = e[0].length;
        let i = e[1] * s;
        if ((i = Math.round(i)) < 1) {
          i = 1;
        }
        let o = `${i} 次`;
        let l = e.index;
        t = x.replaceStringAtIndex(t, l, o, r);
      }
      return t;
    }(t = function (t) {
      let e;
      let a = /(?: )([0-9]+)(?:minutes.)/g;
      while ((e = a.exec(t)) !== null) {
        if (e.index === a.lastIndex) {
          a.lastIndex++;
        }
        let r = e[0].length;
        let i = e[1] * s;
        i = Math.round(i);
        let o = x.minutesToTime(i);
        let l = e.index;
        t = x.replaceStringAtIndex(t, l, o, r);
      }
      return t;
    }(t));
  }
  static entityFixTextNumbers(t) {
    function e(t) {
      let e;
      let a = /(?: )([[0-9]+)(?:minutes.)/g;
      while ((e = a.exec(t)) !== null) {
        if (e.index === a.lastIndex) {
          a.lastIndex++;
        }
        let s = e[0].length;
        let r = e[1];
        let i = x.minutesToTime(r);
        let o = e.index;
        t = x.replaceStringAtIndex(t, o, i, s);
      }
      return t;
    }
    function a(t) {
      let e;
      let a = /(?: )([0-9]+)(?:times.)/g;
      while ((e = a.exec(t)) !== null) {
        if (e.index === a.lastIndex) {
          a.lastIndex++;
        }
        let s = e[0].length;
        let r = ` ${e[1]} 次`;
        let i = e.index;
        t = x.replaceStringAtIndex(t, i, r, s);
      }
      return t;
    }
    for (let s in t) {
      t[s] = e(t[s]);
      t[s] = a(t[s]);
    }
    return t;
  }
  static applyMultipliersToDuration(t, e) {
    let a = S.getFinalTaskMultiplier();
    let s = 0;
    if (e) {
      s = S.getTagMultiplier(e);
    }
    t *= a += Number(s);
    return t = Math.round(t);
  }
  static getPercentageFromText(t) {
    let e = /([0-9]+)(?:%)/g.exec(t);
    if (e) {
      return Number(e[1]) / 100;
    }
    return 0;
  }
  static getClassSkipsFromText(t) {
    let e = /(?:Skip) ([0-9])/g.exec(t);
    if (e) {
      return Number(e[1]);
    }
    return 0;
  }
  static dateObjectToHumanTime(t) {
    let e = parseInt(t / 1000 % 60);
    let a = parseInt(t / 60000 % 60);
    let s = parseInt(t / 3600000 % 24);
    let r = Math.floor(t / 60000 / 1440);
    s = s < 10 ? "0" + s : s;
    a = a < 10 ? "0" + a : a;
    e = e < 10 ? "0" + e : e;
    if (r > 0) {
      return `${r}:${s}:${a}:${e}`;
    } else {
      return `${s}:${a}:${e}`;
    }
  }
  static urlToObject(t) {
    t ||= location.href;
    let e = t.indexOf("?");
    let a = t.indexOf("#");
    if (a == -1) {
      a = t.length;
    }
    let s = e == -1 || a == e + 1 ? t.substring(a) : t.substring(e + 1, a);
    let r = {};
    let i = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
    r.htmlFile = i;
    s.split("&").forEach(function (t) {
      if (!t) {
        return;
      }
      let e = (t = t.split("+").join(" ")).indexOf("=");
      let a = e > -1 ? t.substr(0, e) : t;
      let s = e > -1 ? decodeURIComponent(t.substr(e + 1)) : "";
      let i = a.indexOf("[");
      if (i == -1) {
        r[decodeURIComponent(a)] = s;
      } else {
        let t = a.indexOf("]", i);
        let e = decodeURIComponent(a.substring(i + 1, t));
        a = decodeURIComponent(a.substring(0, i));
        r[a] ||= [];
        if (e) {
          r[a][e] = s;
        } else {
          r[a].push(s);
        }
      }
    });
    return r;
  }
  static minutesToTime(t) {
    let e = Math.floor(t / 1440);
    let a = Math.floor((t - e * 1440) / 60);
    let s = Math.round(t % 60);
    let r = "";
    if (e > 0) {
      r += `${e} 天`;
    }
    if (a > 0) {
      if (e && !s) {
        r += " 和";
      } else if (e) {
        r += ";";
      }
      r += ` ${a} 小时`;
    }
    if (s > 0) {
      if (e || a) {
        r += " 和";
      }
      r += ` ${s} 分钟`;
    }
    return r.trim();
  }
  static replaceStringAtIndex(t, e, a, s) {
    let r = a.length - s + 1;
    return ` ${t.substr(0, e)} ${a}${t.substr(e - r + a.length)}`;
  }
  static textToMilliseconds(t) {
    let e;
    let a = /(?: )([0-9]+)(?:minutes.)/g;
    let s = 0;
    while ((e = a.exec(t)) !== null) {
      if (e.index === a.lastIndex) {
        a.lastIndex++;
      }
      let t = e[1];
      s += Number(t);
    }
    return s * 60000;
  }
}
class S {
  static calculateClubTaskMultiplier() {
    let t = p.getClubsData();
    let e = g.getActiveClubPerks();
    let a = 0;
    let s = 0;
    for (let r of e) {
      let e = t[r.sourceId];
      if (r.perk1 == 1) {
        a += x.getPercentageFromText(e.perk1);
        s++;
      }
      if (r.perk2 == 1) {
        a += x.getPercentageFromText(e.perk2);
        s++;
      }
    }
    if (isNaN(a)) {
      return 0;
    } else if (isNaN(s)) {
      return undefined;
    } else {
      if (a < 0) {
        a = 0;
      }
      g.setActivePerksNum(s);
      return a;
    }
  }
  static calculateDifficultyTaskMultiplier() {
    let t = y.getPartnersData();
    let e = 0;
    let a = g.getActivePartnerPerks();
    for (let s of a) {
      let a = t[s.sourceId];
      if (a.tags.split(" ").some(t => t == "all" || t == "justDifficulty")) {
        if (s.perk1 == 1) {
          e += x.getPercentageFromText(a.job1);
        }
        if (s.perk2 == 1) {
          e += x.getPercentageFromText(a.job2);
        }
      }
    }
    return e;
  }
  static getTagMultiplier(t) {
    t = t.split(" ");
    let e = y.getPartnersData();
    let a = 0;
    let s = g.getActivePartnerPerks();
    for (let r of s) {
      let s = e[r.sourceId];
      let i = s.tags.split(" ");
      if (t.some(t => i.indexOf(t) >= 0)) {
        if (r.perk1 == 1) {
          a += x.getPercentageFromText(s.job1);
        }
        if (r.perk2 == 1) {
          a += x.getPercentageFromText(s.job2);
        }
      }
    }
    return a;
  }
  static calculateFinalTaskMultiplier() {
    let t = s.BASE_TASK_MULTIPLIER - S.calculateClubTaskMultiplier() + S.calculateDifficultyTaskMultiplier();
    S.setFinalTaskMultiplier(t.toFixed(2));
    return t.toPrecision(2);
  }
  static setFinalTaskMultiplier(t) {
    if (t < 0.5) {
      t = 0.5;
    }
    localStorage.setItem("finalTaskMultiplier", JSON.stringify(t));
  }
  static getFinalTaskMultiplier() {
    let t = JSON.parse(localStorage.getItem("finalTaskMultiplier"));
    return Number(t);
  }
}
class I {
  static joinClub(t, e) {
    if (l.getCurrentMajor() === null) {
      alert("你要先选择一个专业!!!");
      dt.ViewMajors();
    }
    let a = p.getClubsData();
    let r = p.getActiveClubs();
    let i = p.getMaxActiveClubs();
    let o = p.getClubById(t);
    if (r.includes(o.id)) {
      alert("你已经参加这个社团了！");
      return;
    }
    if (r.length >= i) {
      alert("你参加的社团数不能超过 " + s.MAX_CLUBS + "个。");
      return;
    }
    if (o.tier == 2) {
      if (v.getCredits() < s.REQUIRED_CREDITS_UNLOCK_ELITE_CLUBS) {
        alert(`你需要至少 ${s.REQUIRED_CREDITS_UNLOCK_ELITE_CLUBS} 点学分才能参加这个精英社团。`);
        return;
      }
      for (let t of r) {
        if (a[t].tier == 2) {
          alert(`你不能加入超过 ${s.MAX_CLUBS_ELITE} 个的精英社团！`);
          return;
        }
      }
    }
    let n = g.getActiveClubPerks();
    let u = {
      sourceId: o.id,
      perk1: false,
      perk2: false
    };
    n.push(u);
    g.setActivePerks(n);
    p.addActiveClub(o.id);
    if (e != 1) {
      alert("你已经报名参加了 " + o.name);
      dt.ViewSchedule();
    }
  }
  static leaveClub(t) {
    let e = p.getActiveClubs();
    let a = g.getActiveClubPerks();
    let s = e.findIndex(e => e == t.id);
    e.splice(s, 1);
    localStorage.setItem("activeClubs", JSON.stringify(e));
    let r = a.findIndex(e => e.sourceId == t.id);
    a.splice(r, 1);
    g.setActivePerks(a);
    S.calculateFinalTaskMultiplier();
    I.calculateClubSkips();
    if (t.id == 10) {
      v.resetRequiredCredits();
    }
    if (t.tier == 2) {
      localStorage.setItem("classSkipsAvailable", JSON.stringify(0));
    }
    alert("你已经成功地离开了社团!");
    dt.ViewSchedule();
  }
  static increaseClubSkips(t) {
    let e = localStorage.getItem("classSkipsAvailable");
    let a = Number(e) + Number(t);
    if (isNaN(a)) {
      m.debug("使用公假条错误，请看控制台！", a);
    } else {
      p.setClassSkipsAvailable(a);
    }
  }
  static calculateClubSkips() {
    let t = p.getClubsData();
    let e = g.getActiveClubPerks();
    let a = 0;
    for (let s of e) {
      let e = t[s.sourceId];
      if (s.perk1 == 1) {
        let t = x.getClassSkipsFromText(e.perk1);
        if (t) {
          a += Number(t);
        }
      }
      if (s.perk2 == 1) {
        let t = x.getClassSkipsFromText(e.perk2);
        if (t) {
          a += Number(t);
        }
      }
      if (p.getActiveClubs().find(t => t == 10) && a >= 2) {
        p.setClassSkipsAvailable(2);
        return;
      }
      I.increaseClubSkips(a);
    }
  }
}
class C {
  static setRolledToday(t) {
    localStorage.setItem("rouletteRolledToday", JSON.stringify(t));
  }
  static isRouletteRolledToday() {
    return JSON.parse(localStorage.getItem("rouletteRolledToday"));
  }
  static getRouletteChoices() {
    return o.rouletteChoices;
  }
  static setLastResult(t) {
    localStorage.setItem("lastRouletteResult", JSON.stringify(t));
  }
  static getLastResult() {
    return localStorage.getItem("lastRouletteResult");
  }
}
class T {
  static isTodayWeekend() {
    return r.todayName() == "Saturday" || r.todayName() == "Sunday";
  }
  static hasOneDayPassed() {
    let t = k.getLastDate();
    return new Date().getDate() != t;
  }
  static passDay() {
    try {
      console.log("a day has passed");
      let t = new Date().getDate();
      let e = g.getActiveClubPerks();
      for (let t of e) {
        if (t.sourceId != 10) {
          t.perk1 = false;
          t.perk2 = false;
        }
      }
      g.setActivePerks(e);
      localStorage.setItem("activePerksNum", "0");
      let a = g.getActivePartnerPerks();
      for (let t of a) {
        t.perk1 = false;
        t.perk2 = false;
      }
      g.setActivePartnerPerks(a);
      let s = j.isEasyModeEnabled();
      let i = r.todayName();
      if (i != "Sunday" && i != "Monday" && !s) {
        let t = f.getAttendedClassesToday();
        let e = f.getTodayClasses();
        let a = b.getTasksTimers();
        for (let s of e) {
          let e = t.find(t => t == s);
          let r = a.some(t => t.sourceId == s);
          if (!e && !r) {
            P.skipClass(s);
          }
        }
      }
      S.calculateFinalTaskMultiplier();
      I.calculateClubSkips();
      let o = b.getTasksTimers();
      o.forEach(function (t, e) {
        if (t.isEnded) {
          o.splice(e, 1);
        }
      });
      b.setTasksTimers(o);
      f.setAttendedClassesToday([]);
      U.submittedProgressTodayFalse();
      C.setRolledToday(false);
      C.setLastResult(null);
      localStorage.setItem("lastDate", JSON.stringify(t));
      P.calculateTodayClasses();
      window.location.reload();
    } catch (t) {
      alert("错误，见控制台并报告给抖喵酱！");
      console.log(t);
    }
  }
}
class P {
  static joinClass(t) {
    try {
      let e = f.getClassesData();
      let a = f.getCurrentClasses();
      let i = f.getCompletedClasses();
      let o = s.MAX_ACTIVE_CLASSES;
      let n = e[t];
      if (l.getCurrentMajor() == null) {
        alert("你要先选择一个专业!!!");
        dt.ViewMajors();
        return false;
      }
      for (let e of a) {
        if (e == t) {
          alert("You have already signed up for " + n.name);
          return;
        }
      }
      if (a.length >= o) {
        alert("你不能选择超过 " + o + " 个课程");
        return;
      }
      for (let e of i) {
        if (e == t) {
          alert("你以前已经完成了这门课!");
          return;
        }
      }
      if (n.tier == "intermediate" && Number(r.currentCredits()) < s.REQUIRED_CREDITS_UNLOCK_INTERMEDIATE) {
        alert(`你至少需要 ${s.REQUIRED_CREDITS_UNLOCK_INTERMEDIATE} 点学分才能选择普通课程！`);
        return;
      }
      if (n.tier == "advanced" && Number(r.currentCredits()) < s.REQUIRED_CREDITS_UNLOCK_ADVANCED) {
        alert(`你至少需要 ${s.REQUIRED_CREDITS_UNLOCK_ADVANCED} 点学分才能选择高级课程！`);
        return;
      }
      if (n.tier == "master" && Number(r.currentCredits()) < s.REQUIRED_CREDITS_UNLOCK_MASTER) {
        alert(`你至少需要 ${s.REQUIRED_CREDITS_UNLOCK_MASTER} 点学分才能选择大师课程！`);
        return;
      }
      let u = false;
      let d = n.prerequisites.split(" ").filter(t => t);
      for (let t of d) {
        let a = e[t];
        if (i.some(e => e == t) === false) {
          alert("你需要完成前置课程 " + a.name + " ！!");
          u = true;
        }
      }
      if (u === true) {
        return;
      }
      a.push(t);
      f.setCurrentClasses(a);
      P.calculateTodayClasses();
      alert(`您已经成功选择了 ${n.name}.`);
      dt.RefreshView();
    } catch (t) {
      A.catchError(t);
    }
  }
  static leaveClass(t) {
    try {
      let e = f.getClassById(t);
      let a = f.getCurrentClasses();
      let s = a.findIndex(e => e == t);
      a.splice(s, 1);
      b.removeTaskTimer(t);
      let r = f.getClassDailyTaskcredits(e) * 2;
      A.decreasecurrentCredits(r);
      f.setCurrentClasses(a);
      P.calculateTodayClasses();
      alert(`你已经退选了${e.name}. 这门课程，因为退选扣除 ${r} 点学分！！`);
      dt.RefreshView();
    } catch (t) {
      A.catchError(t);
    }
  }
  static attendClass(t, e, a) {
    try {
      let s = f.getClassById(t);
      let r = f.getAttendedClassesToday();
      if (e) {
        r.push(t);
        f.setAttendedClassesToday(r);
      }
      let i = f.getAttendedClasses();
      if (!i.find(e => e == t)) {
        i.push(t);
        f.setAttendedClasses(i);
      }
      if (e) {
        let e = f.getTodayClasses();
        let a = e.findIndex(e => e == t);
        e.splice(a, 1);
        f.setTodayClasses(e);
      }
      let o = f.getClassDailyTaskcredits(s);
      a ||= 0;
      let l = o + a;
      A.increasecurrentCredits(l);
      dt.RefreshView();
    } catch (t) {
      A.catchError(t);
    }
  }
  static passClass(t, e) {
    try {
      let a = f.getClassById(t);
      let s = f.getCurrentClasses();
      let i = s.findIndex(e => e == t);
      if (i != -1) {
        s.splice(i, 1);
        f.setCurrentClasses(s);
      }
      let o = f.getCompletedClasses();
      o.push(t);
      f.setCompletedClasses(o);
      let l = f.getAttendedClassesToday();
      l.push(t);
      f.setAttendedClassesToday(l);
      let n = f.getTodayClasses();
      if ((i = n.findIndex(e => e == t)) != -1) {
        n.splice(i, 1);
        f.setTodayClasses(n);
      }
      let u = r.classExamcredits(a);
      e ||= 0;
      let d = u + e;
      A.increasecurrentCredits(d);
      dt.RefreshView();
    } catch (t) {
      A.catchError(t);
    }
  }
  static skipClass(t) {
    try {
      let e = f.getClassById(t);
      let a = f.getAttendedClassesToday();
      a.push(t);
      f.setAttendedClassesToday(a);
      let s = f.getTodayClasses();
      let r = s.findIndex(e => e == t);
      if (r != -1) {
        s.splice(r, 1);
        f.setTodayClasses(s);
      }
      if (f.getClassSkipsAvailable() <= 0) {
        alert(`你由于逃课将受到处分，处分内容是 ${e.name}!`);
        E.rollPunishment(1, true);
      } else {
        let t = Number(f.getClassSkipsAvailable());
        t -= 1;
        U.setClassSkipsAvailable(t);
      }
    } catch (t) {
      A.catchError(t);
    }
  }
  static failClassTask(t) {
    try {
      let e = f.getAttendedClassesToday();
      e.push(t);
      f.setAttendedClassesToday(e);
      let a = f.getTodayClasses();
      let s = a.findIndex(e => e == t);
      a.splice(s, 1);
      f.setTodayClasses(a);
      dt.RefreshView();
    } catch (t) {
      A.catchError();
    }
  }
  static calculateTodayClasses() {
    let t = f.getCurrentClasses();
    let e = [];
    let a = f.getAttendedClassesToday();
    let s = r.todayNum();
    for (let r of t) {
      let t = f.getClassById(r).days.split(" ").filter(t => t).includes(s);
      let i = a.some(t => t == r);
      let o = T.isTodayWeekend();
      let l = j.isEasyModeEnabled();
      if (!i) {
        if (t || o || l) {
          e.push(r);
        }
      }
    }
    let i = e.sort((t, e) => t - e);
    f.setTodayClasses(i);
  }
}
class j {
  static switchEasyMode() {
    let t = j.isEasyModeEnabled();
    t = !t;
    localStorage.setItem("easyMode", JSON.stringify(t));
    P.calculateTodayClasses();
    window.location.reload();
  }
  static isEasyModeEnabled() {
    return JSON.parse(localStorage.getItem("easyMode"));
  }
}
class A {
  static isSubmittedProgressToday() {
    return localStorage.getItem("IsSubmittedProgressToday");
  }
  static increasecurrentCredits(t, e) {
    t = Number(t);
    if (e != 1) {
      let e = r.difficulty();
      if (e == 2) {
        t += 1;
      } else if (e == 3) {
        t += 2;
      } else if (e == 4) {
        t += 3;
      } else if (e == 5) {
        t += 4;
      }
    }
    v.increaseCredits(t);
  }
  static decreasecurrentCredits(t) {
    v.decreaseCredits(t);
  }
  static unlockedHardPunishments() {
    return r.currentCredits() >= s.REQUIRED_CREDITS_UNLOCK_PUNISHMENTS;
  }
  static unlockedEliteClubs() {
    return r.currentCredits() >= s.REQUIRED_CREDITS_UNLOCK_ELITE_CLUBS;
  }
  static uploadProgressData() {
    let t = $("#form-ranking input[name=ranking-name]").val();
    let e = l.getCurrentMajor();
    let a = h.getPunishmentsDoneNum();
    let s = f.getCompletedClasses();
    if (!e) {
      alert("你要先选择一个专业!!!");
      dt.ViewMajors();
    }
    if (j.isEasyModeEnabled()) {
      alert("排行榜不适用于简单模式玩家");
      return;
    }
    if (!t || t.length === 0) {
      alert("请输入一个名字");
      return;
    }
    if (A.isSubmittedProgressToday() == "true") {
      alert("您今天已经提交了您的进度!");
      return;
    }
    let r = 0;
    let i = l.getCompletedMajors();
    for (let t of i) {
      r += 160;
    }
    for (let t of s) {
      let e = f.getClassDailyTaskcredits(t);
      r += e + e * 3;
    }
    let o = {
      name: t,
      major: e.name,
      majors: i.length,
      classes: s.length,
      punishments: a,
      score: r
    };
    $.ajax({
      method: "GET",
      url: "https://baas.kinvey.com/appdata/kid_B1dZvbGC7/ranking",
      headers: {
        Authorization: "Basic a2lkX0IxZFp2YkdDNzo3NzFlZTdkMjU1YzE0OWJkOWE4YTBkMzc4ZTg3ZTU1Yw==",
        "X-Kinvey-API-Version": "3"
      }
    }).then(function (e) {
      for (let a of e) {
        if (a.name == t) {
          $.ajax({
            method: "DELETE",
            url: `https://baas.kinvey.com/appdata/kid_B1dZvbGC7/ranking/${a._id}`,
            headers: {
              Authorization: "Basic a2lkX0IxZFp2YkdDNzo3NzFlZTdkMjU1YzE0OWJkOWE4YTBkMzc4ZTg3ZTU1Yw==",
              "X-Kinvey-API-Version": "3"
            }
          }).catch(m.handleAjaxError);
        }
      }
    }).then(function () {
      $.ajax({
        method: "POST",
        url: "https://baas.kinvey.com/appdata/kid_B1dZvbGC7/ranking",
        headers: {
          Authorization: "Basic a2lkX0IxZFp2YkdDNzo3NzFlZTdkMjU1YzE0OWJkOWE4YTBkMzc4ZTg3ZTU1Yw==",
          "X-Kinvey-API-Version": "3"
        },
        data: o
      }).then(alert("进度已提交!")).catch(m.handleAjaxError);
      U.submittedProgressTodayTrue();
      dt.RefreshView();
    }).catch(m.handleAjaxError);
  }
  static catchError(t) {
    alert("错误-请参阅控制台(F12)并报告给抖喵酱！");
    console.log(t);
  }
}
class E {
  static rollPunishment(t, e = null, a = 0) {
    if (localStorage.getItem("currentMajor") == null) {
      alert("你要先选择一个专业!!!");
      dt.ViewMajors();
    }
    let r = h.getCurrentPunishments();
    let i = h.getMaxPunishments();
    if (r.length >= Number(i) + a) {
      if (t == 1 && !e) {
        alert(`你不能拥有超过 ${i} 个处分，请尽快处理处分！！！`);
      }
      return;
    }
    let o = h.getPunishmentsData();
    let l = o;
    if (!h.IsUnlockedHardcorePunishments()) {
      l = Object.values(o).filter(t => t.tier == 1 || t.tier == 2);
    }
    if (!h.IsUnlockedHardPunishments()) {
      l = Object.values(o).filter(t => t.tier == 1);
    }
    console.log(l);
    let n = (l = Object.entries(l)).length;
    for (let a = 0; a < t; a++) {
      while (true) {
        let a = l[m.generateRandomIndex(n)][1];
        if (!r.some(t => t == a.id)) {
          if (t == 1 && !e) {
            alert(`你的处分是 ${a.name}`);
          }
          r.push(a.id);
          localStorage.setItem("currentPunishments", JSON.stringify(r));
          break;
        }
      }
      if (h.getCurrentPunishments().length >= s.MAX_PUNISHMENTS) {
        break;
      }
    }
    dt.ViewSchedule();
  }
  static rollPunishmentLight(t = 0) {
    if (localStorage.getItem("currentMajor") == null) {
      alert("你要先选择一个专业!!!");
      dt.ViewMajors();
    }
    let e = h.getCurrentPunishments();
    let a = h.getMaxPunishments();
    if (e.length >= Number(a) + t) {
      alert(`你不能拥有超过 ${a} 个处分，请尽快处理！！！`);
      return;
    }
    let s = h.getPunishmentsData();
    let r = Object.values(s).filter(t => t.tier == 1);
    let i = (r = Object.entries(r)).length;
    while (true) {
      let t = r[m.generateRandomIndex(i)][1];
      if (!e.some(e => e == t.id)) {
        e.push(t.id);
        alert("你的处分是 is " + t.name);
        localStorage.setItem("currentPunishments", JSON.stringify(e));
        dt.ViewSchedule();
        return;
      }
    }
  }
  static rollPunishmentHeavy(t = 0) {
    if (localStorage.getItem("currentMajor") == null) {
      alert("你要先选择一个专业!!!");
      dt.ViewMajors();
      return false;
    }
    let e = h.getCurrentPunishments();
    let a = h.getMaxPunishments();
    if (e.length >= Number(a) + t) {
      alert(`你不能拥有超过 ${a} 个处分，请尽快做完！！！`);
      return;
    }
    if (h.IsUnlockedHardPunishments() === false) {
      alert("你还没有解锁重型处分。");
      return;
    }
    let s = h.getPunishmentsData();
    let r = Object.values(s).filter(t => t.tier == 2);
    let i = (r = Object.entries(r)).length;
    while (true) {
      let t = r[m.generateRandomIndex(i)][1];
      if (!e.some(e => e == t.id)) {
        e.push(t.id);
        alert("你的处分是 " + t.name);
        localStorage.setItem("currentPunishments", JSON.stringify(e));
        dt.ViewSchedule();
        return;
      }
    }
  }
  static rollPunishmentHardcore(t = 0) {
    if (localStorage.getItem("currentMajor") == null) {
      alert("你要先选择一个专业!!!");
      dt.ViewMajors();
      return false;
    }
    let e = h.getCurrentPunishments();
    let a = h.getMaxPunishments();
    if (e.length >= Number(a) + t) {
      alert(`你不能拥有超过 ${a} 个处分，请尽快做完！！！`);
      return;
    }
    if (h.IsUnlockedHardcorePunishments() == 0) {
      alert("你没有启用核心处分。");
      return;
    }
    if (A.unlockedHardPunishments() == 0) {
      alert("你还没有100学分！");
      return;
    }
    let s = h.getPunishmentsData();
    let r = Object.values(s).filter(t => t.tier == 3);
    let i = (r = Object.entries(r)).length;
    while (true) {
      let t = r[m.generateRandomIndex(i)][1];
      if (!e.some(e => e == t.id)) {
        e.push(t.id);
        alert("你的处分是 " + t.name);
        localStorage.setItem("currentPunishments", JSON.stringify(e));
        dt.ViewSchedule();
        return;
      }
    }
  }
  static completePunishment(t) {
    let e = h.getPunishmentById(t);
    let a = h.getCurrentPunishments();
    let s = a.findIndex(e => e == t);
    a.splice(s, 1);
    localStorage.setItem("currentPunishments", JSON.stringify(a));
    let r = Number(h.getPunishmentsDoneNum());
    r++;
    localStorage.setItem("punishmentsDoneNum", JSON.stringify(r));
    alert(e.name + " 完成");
    dt.RefreshView();
  }
  static rerollPunishment(t) {
    let e = h.getPunishmentById(t);
    if (e.tier == 1) {
      E.rollPunishmentLight(1);
    } else if (e.tier == 2) {
      if (A.unlockedHardPunishments()) {
        E.rollPunishmentHeavy(1);
      } else {
        E.rollPunishmentLight(1);
      }
    } else if (e.tier == 3) {
      if (A.unlockedHardPunishments()) {
        if (h.IsUnlockedHardcorePunishments()) {
          E.rollPunishmentHardcore(1);
        } else {
          E.rollPunishmentHeavy(1);
        }
      } else {
        E.rollPunishmentLight(1);
      }
    } else {
      E.rollPunishment(1, false, 1);
    }
    let a = h.getCurrentPunishments();
    let s = a.findIndex(e => e == t);
    a.splice(s, 1);
    localStorage.setItem("currentPunishments", JSON.stringify(a));
    let r = 0;
    switch (e.tier) {
      case "1":
        r = 2;
        break;
      case "2":
        r = 4;
        break;
      default:
        r = 0;
    }
    let i = r / 2;
    A.decreasecurrentCredits(i);
    alert(e.name + " 再roll一次! 你失去了: " + i + " 点学分！！");
    dt.RefreshView();
  }
  static failPunishment(t) {
    let e = h.getPunishmentById(t);
    let a = h.getCurrentPunishments();
    let s = a.findIndex(t => t == e.id);
    a.splice(s, 1);
    localStorage.setItem("currentPunishments", JSON.stringify(a));
    let r = 0;
    switch (e.tier) {
      case "1":
        r = 2;
        break;
      case "2":
        r = 4;
        break;
      default:
        r = 0;
    }
    A.decreasecurrentCredits(r);
    alert(e.name + "失败！! 你失去了:  " + r + " 点学分！！");
    dt.RefreshView();
  }
  static switchHardcorePunishments() {
    let t = h.IsUnlockedHardcorePunishments();
    t = !t;
    h.setUnlockedHardcorePunishments(t);
    location.reload();
  }
}
class N {
  static invitePartner(t, e) {
    if (l.getCurrentMajor() === null) {
      alert("你要先选择一个专业!!!");
      dt.ViewMajors();
      return false;
    }
    let a = y.getActivePartners();
    let r = y.getPartnersData()[t];
    if (!r) {
      return;
    }
    if (a.length >= s.MAX_PARTNERS) {
      alert(`你不能选择超过 ${s.MAX_PARTNERS} 个姬友！！`);
      return;
    }
    if (a.find(e => e == t)) {
      alert("你和这个姬友已经是好朋友了！！");
      return;
    }
    let i = g.getActivePartnerPerks();
    let o = {
      sourceId: t,
      perk1: false,
      perk2: false
    };
    i.push(o);
    g.setActivePartnerPerks(i);
    a.push(t);
    y.setActivePartners(a);
    if (e != 1) {
      alert(`${r.name} 已成为你的姬友！！`);
      dt.ViewSchedule();
      return false;
    } else {
      return undefined;
    }
  }
  static kickPartner(t) {
    let e = y.getActivePartners();
    let a = y.getPartnerById(t);
    let s = e.findIndex(e => e == t);
    e.splice(s, 1);
    y.setActivePartners(e);
    let r = g.getActivePartnerPerks();
    let i = r.findIndex(e => e.sourceId == t);
    r.splice(i, 1);
    g.setActivePartnerPerks(r);
    alert(`你已经和 ${a.name}绝交了！ :(`);
    dt.ViewSchedule();
    return false;
  }
}
class M {
  static getGameVersion() {
    return Number(JSON.parse(localStorage.getItem("gameVersion")));
  }
}
class D {
  static updateGame(t = false) {
    try {
      let e = M.getGameVersion();
      if (e < 1.65) {
        console.log("版本低于1.65, 无法迁移你的课程");
        D.migratePartners();
        D.migrateMajors();
        D.migrateClasses();
        D.migrateClubs();
        D.migratePunishments();
        D.migrateDates();
      }
      if (e < 1.7) {
        console.log("版本低于1.70，无法迁移日期");
        D.migrateDates();
      }
      D.updateMajors();
      D.updateClasses();
      D.updateClubs();
      D.updatePartners();
      D.updatePunishments();
      O.seedData();
      S.calculateFinalTaskMultiplier();
      P.calculateTodayClasses();
      localStorage.setItem("gameVersion", JSON.stringify(s.CURRENT_VERSION));
      if (!t) {
        alert("系统更新");
      }
      dt.RefreshView();
    } catch (t) {
      alert("错误，见控制台并报告给抖喵酱！");
      console.log(t);
    }
  }
  static migrateMajors() {
    let t = l.getMajorsData();
    let e = JSON.parse(localStorage.getItem("currentMajor"));
    if (!e) {
      localStorage.removeItem("majorsData");
      alert("你需要重新选择一个专业！！！");
      return;
    }
    let a = e.id;
    if (t[a]) {
      localStorage.setItem("currentMajor", JSON.stringify(a));
    }
    let s = l.getCompletedMajors();
    let r = [];
    for (let e of s) {
      let a = e.id;
      if (t[a]) {
        r.push(a);
      }
    }
    localStorage.setItem("completedMajors", JSON.stringify(r));
    localStorage.removeItem("majorsData");
  }
  static migrateClasses() {
    let t = f.getClassesData();
    let e = f.getCurrentClasses();
    let a = [];
    for (let s of e) {
      let e = s.id;
      if (t[e]) {
        a.push(e);
      }
    }
    f.setCurrentClasses(a);
    let s = f.getTodayClasses();
    let r = [];
    for (let e of s) {
      let a = e.id;
      if (t[a]) {
        r.push(a);
      }
    }
    f.setTodayClasses(r);
    let i = f.getAttendedClasses();
    let o = [];
    for (let e of i) {
      let a = e.id;
      if (t[a]) {
        o.push(a);
      }
    }
    f.setAttendedClasses(o);
    let l = f.getAttendedClassesToday();
    let n = [];
    for (let e of l) {
      let a = e.id;
      if (t[a]) {
        n.push(a);
      }
    }
    f.setAttendedClassesToday(n);
    let u = f.getCompletedClasses();
    let d = [];
    for (let e of u) {
      let a = e.id;
      if (t[a]) {
        d.push(a);
      }
    }
    f.setCompletedClasses(d);
    localStorage.removeItem("classesData");
  }
  static migrateClubs() {
    let t = p.getActiveClubs();
    p.resetActiveClubs();
    v.resetRequiredCredits();
    for (let e of t) {
      I.joinClub(e, true);
    }
    localStorage.removeItem("clubsData");
  }
  static migratePartners() {
    let t = y.getActivePartners();
    y.resetActivePartners();
    for (let e of t) {
      N.invitePartner(e, true);
    }
    localStorage.removeItem("partnersData");
  }
  static migratePunishments() {
    let t = h.getCurrentPunishments();
    localStorage.removeItem("currentPunishments");
    localStorage.removeItem("maxPunishments");
    let e = h.getPunishmentsData();
    let a = [];
    for (let s of t) {
      let t = s.id;
      if (e[t]) {
        a.push(t);
      }
    }
    localStorage.setItem("currentPunishments", JSON.stringify(a));
    localStorage.removeItem("punishmentsData");
  }
  static updateMajors() {
    let t = l.getMajorsData();
    let e = l.getCurrentMajorId();
    let a = [];
    if (M.getGameVersion() <= 1.7) {
      a = [6, 7, 13];
    }
    if (a.some(t => t == e)) {
      console.log("major has been reworked");
      l.setCurrentMajor(null);
      return;
    }
    let s = l.getCompletedMajors();
    if (s.some(t => t == "4")) {
      s.push("7");
      l.setCompletedMajors(s);
    }
    if (!t[e]) {
      l.setCurrentMajor(null);
    }
  }
  static updateClasses() {
    let t = f.getClassesData();
    let e = [];
    if (JSON.parse(localStorage.getItem("gameVersion")) <= 1.7) {
      e = [315, 415, 109, 209, 309, 409, 412];
    }
    let a = f.getCurrentClasses();
    let s = [];
    for (let r of a) {
      if (e.some(t => t == r)) {
        console.log("save contains reworked classes");
        continue;
      }
      if (t[r]) {
        s.push(r);
      }
    }
    f.setCurrentClasses(s);
    let r = f.getTodayClasses();
    let i = [];
    for (let a of r) {
      if (e.some(t => t == a)) {
        continue;
      }
      if (t[a]) {
        i.push(a);
      }
    }
    f.setTodayClasses(i);
    let o = f.getAttendedClasses();
    let l = [];
    for (let a of o) {
      if (e.some(t => t == a)) {
        continue;
      }
      if (t[a]) {
        l.push(a);
      }
    }
    f.setAttendedClasses(l);
    let n = f.getAttendedClassesToday();
    let u = [];
    for (let a of n) {
      if (e.some(t => t == a)) {
        continue;
      }
      if (t[a]) {
        u.push(a);
      }
    }
    f.setAttendedClassesToday(u);
    let d = f.getCompletedClasses();
    let c = [];
    for (let a of d) {
      if (e.some(t => t == a)) {
        continue;
      }
      if (t[a]) {
        c.push(a);
      }
    }
    f.setCompletedClasses(c);
    P.calculateTodayClasses();
    localStorage.removeItem("classesData");
  }
  static updateClubs() {
    let t = p.getActiveClubs();
    p.resetActiveClubs();
    v.resetRequiredCredits();
    for (let e of t) {
      I.joinClub(e, true);
    }
    localStorage.removeItem("clubsData");
  }
  static updatePartners() {
    let t = y.getActivePartners();
    y.resetActivePartners();
    for (let e of t) {
      N.invitePartner(e, true);
    }
    localStorage.removeItem("partnersData");
  }
  static updatePunishments() {
    let t = h.getCurrentPunishments();
    localStorage.removeItem("currentPunishments");
    localStorage.removeItem("maxPunishments");
    let e = h.getPunishmentsData();
    let a = [];
    for (let s of t) {
      if (e[s]) {
        a.push(s);
      }
    }
    localStorage.setItem("currentPunishments", JSON.stringify(a));
    localStorage.removeItem("punishmentsData");
  }
  static migrateDates() {
    let t = k.getLastDate();
    let e = new Date(t).getDate();
    k.setLastDate(e);
  }
}
import * as R from "./0.js";
var L = R;
class O {
  static seedData() {
    if (localStorage.getItem("currentMajor") == null) {
      localStorage.setItem("currentMajor", JSON.stringify(0));
    }
    if (localStorage.getItem("currentCredits") == null) {
      localStorage.setItem("currentCredits", "0");
    }
    if (localStorage.getItem("requiredCredits") == null) {
      localStorage.setItem("requiredCredits", JSON.stringify(s.REQUIRED_CREDITS_GRADUATION));
    }
    if (localStorage.getItem("completedMajors") == null) {
      localStorage.setItem("completedMajors", JSON.stringify([]));
    }
    if (localStorage.getItem("currentClasses") == null) {
      localStorage.setItem("currentClasses", JSON.stringify([]));
    }
    if (localStorage.getItem("todayClasses") == null) {
      localStorage.setItem("todayClasses", JSON.stringify([]));
    }
    if (localStorage.getItem("completedClasses") == null) {
      localStorage.setItem("completedClasses", JSON.stringify([]));
    }
    if (localStorage.getItem("attendedClasses") == null) {
      localStorage.setItem("attendedClasses", JSON.stringify([]));
    }
    if (localStorage.getItem("attendedClassesToday") == null) {
      localStorage.setItem("attendedClassesToday", JSON.stringify([]));
    }
    if (localStorage.getItem("activeClubs") == null) {
      localStorage.setItem("activeClubs", JSON.stringify([]));
    }
    if (localStorage.getItem("activePerks") == null) {
      localStorage.setItem("activePerks", JSON.stringify([]));
    }
    if (localStorage.getItem("classSkipsAvailable") == null) {
      localStorage.setItem("classSkipsAvailable", "0");
    }
    if (localStorage.getItem("activePerksNum") == null) {
      localStorage.setItem("activePerksNum", "0");
    }
    if (localStorage.getItem("maxActiveClubs") == null) {
      localStorage.setItem("maxActiveClubs", JSON.stringify(s.MAX_CLUBS));
    }
    if (localStorage.getItem("maxActivePerks") == null) {
      localStorage.setItem("maxActivePerks", JSON.stringify(s.MAX_PERKS));
    }
    if (localStorage.getItem("currentPunishments") == null) {
      localStorage.setItem("currentPunishments", JSON.stringify([]));
    }
    if (localStorage.getItem("hardcorePunishmentsStatus") == null) {
      localStorage.setItem("hardcorePunishmentsStatus", JSON.stringify(false));
    }
    if (localStorage.getItem("tasks") == null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
    if (localStorage.getItem("activePartners") == null) {
      localStorage.setItem("activePartners", JSON.stringify([]));
    }
    if (localStorage.getItem("activePartnerPerks") == null) {
      localStorage.setItem("activePartnerPerks", JSON.stringify([]));
    }
    if (localStorage.getItem("finalTaskMultiplier") == null) {
      localStorage.setItem("finalTaskMultiplier", "1");
    }
    if (localStorage.getItem("clubTaskMultiplier") == null) {
      localStorage.setItem("clubTaskMultiplier", "0");
    }
    if (localStorage.getItem("difficulty") == null) {
      localStorage.setItem("difficulty", "1");
    }
    if (localStorage.getItem("difficultyTaskMultiplier") == null) {
      localStorage.setItem("difficultyTaskMultiplier", "0");
    }
    if (localStorage.getItem("communityContentStatus") == null) {
      localStorage.setItem("communityContentStatus", JSON.stringify(true));
    }
    if (localStorage.getItem("punishmentsDoneNum") == null) {
      localStorage.setItem("punishmentsDoneNum", "0");
    }
    if (localStorage.getItem("clubActivitiesDoneNum") == null) {
      localStorage.setItem("clubActivitiesDoneNum", "0");
    }
    if (localStorage.getItem("lastDate") == null) {
      localStorage.setItem("lastDate", JSON.stringify(new Date().getDate()));
    }
    if (localStorage.getItem("IsSubmittedProgressToday") == null) {
      localStorage.setItem("IsSubmittedProgressToday", "false");
    }
    if (localStorage.getItem("finalThesisInProgress") == null) {
      localStorage.setItem("finalThesisInProgress", "false");
    }
    if (localStorage.getItem("easyMode") == null) {
      localStorage.setItem("easyMode", JSON.stringify(false));
    }
    localStorage.setItem("firstRun", JSON.stringify(false));
    localStorage.setItem("gameVersion", JSON.stringify(s.CURRENT_VERSION));
    localStorage.setItem("view", JSON.stringify("index"));
  }
  static exportLocStorage() {
    let t = new Blob([JSON.stringify(localStorage)], {
      type: "text/plain;charset=utf-8"
    });
    let e = new Date();
    let a = `${e.getFullYear()}-${(e.getMonth() + 1).toString().length == 1 ? `
				0$ {
					e.getMonth() + 1
				}
				` : e.getMonth() + 1}-${e.getDate().toString().length == 1 ? `
				0$ {
					e.getDate()
				}
				` : e.getDate()}`;
    L(t, `save${a}.suSave`);
  }
  static importLocStorage(t) {
    try {
      let e = t.target.files[0];
      if (!e) {
        return;
      }
      let a = new FileReader();
      let s = false;
      a.onload = function (t) {
        let e = t.target.result;
        let a = JSON.parse(e);
        localStorage.clear();
        let r = new Date().getDate();
        Object.keys(a).forEach(function (t) {
          if (t === "lastDate") {
            if (a[t] != JSON.stringify(r)) {
              s = true;
            }
          } else {
            localStorage.setItem(t, a[t]);
          }
        });
        if (s) {
          localStorage.setItem("attendedClassesToday", JSON.stringify([]));
          localStorage.setItem("todayClasses", JSON.stringify([]));
        }
        localStorage.setItem("lastDate", JSON.stringify(r));
        D.updateGame();
        alert("Data loaded");
        window.location.reload();
      };
      a.readAsText(e);
    } catch (t) {
      console.log(t);
      alert("Something went wrong, see console!");
    }
  }
}
class F {
  static signMajor(t) {
    if (l.getCurrentMajor() == null) {
      let e = l.getMajorById(t);
      localStorage.setItem("currentMajor", JSON.stringify(t));
      alert("您已经成功选择了 " + e.name + "专业!!");
      dt.ViewProgress();
      return false;
    }
    alert("你已经选择了一个专业。");
    dt.ViewProgress();
    return false;
  }
  static dropMajor(t) {
    let e = l.getMajorById(t);
    l.resetCurretnMajor();
    f.resetClasses();
    y.resetActivePartners();
    p.resetActiveClubs();
    alert(`你已经退选了 ${e.name}这个专业. 你将会收到 ${s.PUNISHMENTS_DROP_MAJOR} 张处分单.`);
    E.rollPunishment(s.PUNISHMENTS_DROP_MAJOR);
    dt.ViewMajors();
  }
  static canGraduate() {
    let t = l.getCurrentMajor();
    if (t === null) {
      alert("你要先选择一个专业!!!");
      return false;
    }
    if (h.getCurrentPunishments().length > 0) {
      alert("你毕业之前不能有未完成的处分!!");
      return false;
    }
    if (f.getCurrentClasses().length > 0) {
      alert("您不能在当前还在进行的课程中毕业。");
      return false;
    }
    if (r.currentCredits() < r.requiredCredits()) {
      alert("你没有足够的学分!");
      return false;
    }
    f.getClassesData();
    let e = f.getCompletedClasses();
    let a = false;
    let s = t.prerequisites.split(" ").filter(t => t);
    for (let t of s) {
      if (!e.some(e => e == t)) {
        a = true;
      }
    }
    return a !== true || (alert("您有未完成的预修课程!"), false);
  }
  static choseFinalThesis() {
    let t = l.getCurrentMajorId();
    if (F.canGraduate()) {
      alert("你可以尝试本专业毕业！");
      let e = {
        entityType: "major",
        entityId: t,
        unlocked: true
      };
      dt.ViewMajor(e);
    }
  }
  static completeFinalThesis() {
    let t = l.getCompletedMajors();
    let e = l.getCurrentMajorId();
    t.push(e);
    localStorage.clear();
    O.seedData();
    localStorage.setItem("completedMajors", JSON.stringify(t));
    dt.ViewMajors();
  }
  static failFinalThesis() {
    alert("你的专业考试不及格，你可以重新考试。已Roll 10个处分!");
    E.rollPunishment(10);
    localStorage.setItem("finalThesisInProgress", "false");
    dt.ViewSchedule();
    return false;
  }
}
class Y {
  static runGlobalTimer() {
    setInterval(function () {
      let t = b.getTasksTimers();
      if (t) {
        t.forEach(function (e, a) {
          if (!e.isPaused && !e.isEnded) {
            e.currentTime = Date.now();
          }
          if (e.currentTime >= e.endTime) {
            e.isEnded = true;
          }
          if (e.isEnded) {
            t.splice(a, 1);
            let s = new Date(e.startTime).getDate() == k.getLastDate();
            switch (e.sourceType) {
              case "class":
                if (e.sourceOption == "daily1" || e.sourceOption == "daily2") {
                  P.attendClass(e.sourceId, s, e.extraCredits);
                } else if (e.sourceOption == "exam1" || e.sourceOption == "exam2") {
                  P.passClass(e.sourceId, e.extraCredits);
                }
                break;
              case "major":
                dt.ViewEndgame();
            }
          }
        });
        b.setTasksTimers(t);
        if (T.hasOneDayPassed()) {
          T.passDay();
        }
      }
    }, s.TICK_RATE);
  }
  static pauseTask(t) {
    let e = b.getTasksTimers();
    let a = e.findIndex(e => e.sourceId == t.sourceId);
    if (t.isPaused != 1) {
      t.isPaused = true;
      t.pauseStart = Date.now();
      e[a] = t;
      b.setTasksTimers(e);
    }
  }
  static resumeTask(t) {
    let e = b.getTasksTimers();
    let a = e.findIndex(e => e.sourceId == t.sourceId);
    if (t.isPaused == 0) {
      return;
    }
    t.isPaused = false;
    let s = Date.now() - t.pauseStart;
    if (s >= 14400000) {
      alert("如果你暂停一项任务超过4小时，就会受到惩罚！！！");
      Y.failTask(t);
    }
    t.pauseStart = null;
    t.endTime += s;
    e[a] = t;
    b.setTasksTimers(e);
  }
  static failTask(t) {
    if (t.sourceType == "class") {
      if (t.sourceOption == "daily1" || t.sourceOption == "daily2") {
        alert(`你不完成课业就会受到 ${s.PUNISHMENTS_FAIL_DAILY} 个处分！！！`);
        E.rollPunishment(s.PUNISHMENTS_FAIL_DAILY);
      } else if (t.sourceOption == "exam1" || t.sourceOption == "exam2") {
        alert(`任务失败将会受到 ${s.PUNISHMENTS_FAIL_EXAM} punishments for 个处分！！！`);
        E.rollPunishment(s.PUNISHMENTS_FAIL_EXAM);
      }
      b.removeTaskTimer(t);
      P.failClassTask(t);
    } else if (t.sourceType == "major") {
      b.removeTaskTimer(t);
      F.failFinalThesis();
    }
    dt.ViewSchedule();
  }
  static increaseTaskTime(t, e) {
    let a = b.getTasksTimers();
    let s = a.findIndex(e => e.sourceId == t);
    if (s >= 0) {
      a[s].endTime += e;
      b.setTasksTimers(a);
    }
  }
  static decreaseTaskTime(t, e) {
    let a = b.getTasksTimers();
    let s = a.findIndex(e => e.sourceId == t);
    if (s >= 0) {
      a[s].endTime -= e;
      b.setTasksTimers(a);
    }
  }
  static punishTask(t) {
    if (t.sourceType == "major") {
      if (t.sourceId == 3) {
        let e = 0;
        switch (t.sourceOption) {
          case "exam1":
            console.log("4days");
            e = 345600000;
            Y.increaseTaskTime(objectId, e);
            alert("你的时间增加了4天！！！");
            break;
          case "exam2":
            e = 259200000;
            Y.increaseTaskTime(objectId, e);
            alert("你的时间增加了3天！！！");
            break;
          case "exam3":
            e = 172800000;
            Y.increaseTaskTime(objectId, e);
            alert("你的时间增加了2天！！！");
        }
      } else if (t.sourceId == 6 || t.sourceId == 7) {
        if (t.sourceOption == "exam1") {
          E.rollPunishment(1);
        }
      }
    }
  }
  static calculateTaskBonusPoints(t) {
    t = t.split(" ");
    let e = y.getPartnersData();
    let a = 0;
    let s = g.getActivePartnerPerks();
    for (let r of s) {
      let s = e[r.sourceId].tags.split(" ");
      if (t.some(t => s.indexOf(t) >= 0) || s.some(t => t == "all")) {
        if (r.perk1 == 1) {
          a++;
        }
        if (r.perk2 == 1) {
          a++;
        }
      }
    }
    return Number(a);
  }
}
class V {
  static rollRoullete() {
    let t = C.getRouletteChoices();
    if (C.isRouletteRolledToday()) {
      return t[C.getLastResult()];
    }
    let e = Object.keys(t).length;
    let a = m.generateRandomIndex(e) + 1;
    let s = t[a];
    C.setRolledToday(true);
    C.setLastResult(a);
    if (a == 9) {
      E.rollPunishment(1);
    }
    return s;
  }
  static resetRoullete() {
    localStorage.removeItem("lastRouletteResult");
    localStorage.removeItem("rouletteRolledToday");
  }
}
class q {
  static activateClubPerk(t, e) {
    let a = p.getClubById(t);
    let r = g.getActiveClubPerks();
    let i = r.findIndex(e => e.sourceId == t);
    let o = r[i];
    if (a.tier == 1) {
      switch (e) {
        case 1:
          o.perk1 = !o.perk1;
          if (o.perk1 == 1) {
            g.increaseActivePerksNum();
          } else {
            g.decreaseActivePerksNum();
          }
          break;
        case 2:
          o.perk2 = !o.perk2;
          if (o.perk2 == 1) {
            g.increaseActivePerksNum();
          } else {
            g.decreaseActivePerksNum();
          }
      }
      if (i == -1) {
        r.push(o);
      } else {
        r[i] = o;
      }
      let t = g.getActivePerksNum();
      let a = g.getMaxActivePerks();
      if (t > s.MAX_PERKS) {
        alert(`你不能激活超过 ${a} 个奖励！!`);
        localStorage.setItem("activePerksNum", a);
        return;
      }
      g.setActivePerks(r);
      S.calculateFinalTaskMultiplier();
    } else if (a.tier == 2) {
      switch (e) {
        case 1:
          if (o.perk1 == 1) {
            alert("奖励已经激活");
            return;
          }
          o.perk1 = true;
          g.increaseActivePerksNum();
          break;
        case 2:
          if (o.perk2 == 1) {
            alert("奖励已经激活");
            return;
          }
          o.perk2 = true;
          g.increaseActivePerksNum();
      }
      if (i == -1) {
        r.push(o);
      } else {
        r[i] = o;
      }
      let t = g.getActivePerksNum();
      let a = g.getMaxActivePerks();
      if (t > s.MAX_PERKS) {
        alert(`你不能激活超过 ${a}  个奖励!`);
        localStorage.setItem("activePerksNum", a);
        return;
      }
      g.setActivePerks(r);
      if (e == 1) {
        S.calculateFinalTaskMultiplier();
      } else {
        I.calculateClubSkips();
      }
    }
    if (a.name == "Experimental club") {
      E.rollPunishment(1);
    }
    if (a.id == 10) {
      v.increaseRequiredCredits(s.ELITE_STUDENTS_CREDITS);
    }
    dt.RefreshView();
  }
  static activatePartnerPerk(t, e) {
    let a = g.getActivePartnerPerks();
    let s = a.findIndex(e => e.sourceId == t);
    let r = a[s];
    if (t == 12) {
      if (f.getAttendedClassesToday().length != 0) {
        alert("你今天已经上了一些课，不能再用这个奖励了！");
        return;
      }
      if (!C.isRouletteRolledToday()) {
        alert("你今天没有用过性高潮轮盘，请随机完后再试一次。");
        return;
      }
    }
    switch (e) {
      case 1:
        r.perk1 = !r.perk1;
        break;
      case 2:
        r.perk2 = !r.perk2;
    }
    if (s == -1) {
      a.push(r);
    } else {
      a[s] = r;
    }
    g.setActivePartnerPerks(a);
    if (t == 12) {
      V.resetRoullete();
    }
    S.calculateFinalTaskMultiplier();
    dt.RefreshView();
  }
}
class _ {
  static view(t) {
    _.LoadHtml();
    _.LoadData();
  }
  static LoadHtml() {
    $("main").html("\n        <div class=\"container text-center\" id=\"major-not-signed-up\">\n        <h1 class=\"alert alert-danger\">你还没有选择专业哦！</h1>\n    </div>\n\n    <div class=\"container text-center\" id=\"schedule-page-content\">\n        <h2>今天是 <a id=\"dayToday\"></a>. 今日剩余时间： <a id=\"countdown\"></a></h2>\n        <br>\n\n        <h4 class=\"bg-dark text-white hoverable\" data-toggle=\"collapse\" href=\"#schedule-punishments-container\" role=\"button\"\n            aria-expanded=\"true\" aria-controls=\"schedule-punishments-container\">处分:</h4>\n        <p>如果你有还没执行的处分(惩罚)，你就不能通过正常的课程。处分可以在一周之内的任意一天完成，包括周末。</p>\n        <div id=\"schedule-punishments-container\" class=\"row collapse show\"></div>\n        <br>\n\n        <h4 class=\"bg-dark text-white hoverable\" data-toggle=\"collapse\" href=\"#schedule-clubs-container\" role=\"button\"\n            aria-expanded=\"true\" aria-controls=\"schedule-clubs-container\">社团和姬友:</h4>\n        <p>完成社团活动，可以使逃课不受惩罚和减少任务要求。</p>\n        <div id=\"schedule-clubs-container\" class=\"row collapse show\"></div>\n        <br>\n\n        <h4 class=\"bg-dark text-white hoverable\" data-toggle=\"collapse\" href=\"#schedule-classes-container\" role=\"button\"\n            aria-expanded=\"true\" aria-controls=\"schedule-classes-container\">今天的课程:</h4>\n        <a>完成课程以获得学分！</a><br>\n        <a>你还有公假条的数量: <a id=\"classSkipsAvailable\"></a></a><br>\n        <a>今日课程完成: <a id=\"taskRequirementsMultiplier\"></a></a><br>\n        <div id=\"schedule-classes-container\" class=\"row collapse show\"></div>\n\n        <h4 class=\"bg-dark text-white hoverable\" data-toggle=\"collapse\" href=\"#schedule-table-container\" role=\"button\"\n            aria-expanded=\"true\" aria-controls=\"schedule-table-container\">课程表:</h4>\n        <div id=\"schedule-table-container\" class=\"row collapse show\"></div>\n    </div>");
  }
  static LoadData() {
    let t = l.getCurrentMajor();
    let e = b.getTasksTimers();
    let a = h.getCurrentPunishments();
    let i = f.getTodayClasses();
    let o = f.getAttendedClasses();
    let n = p.getClubsData();
    let u = p.getActiveClubs();
    let c = y.getPartnersData();
    let m = y.getActivePartners();
    (function () {
      let t;
      let a = new Date().setHours(0, 0, 0, 0) + 86400000;
      let r = 1000;
      let i = r * 60;
      let o = i * 60;
      let l = o * 24;
      t = setInterval(function () {
        let s = new Date();
        let n = a - s;
        if (n < 0) {
          clearInterval(t);
          document.getElementById("countdown").innerHTML = "过期!";
          return;
        }
        let u = Math.floor(n % l / o);
        let d = Math.floor(n % o / i);
        let c = Math.floor(n % i / r);
        try {
          document.getElementById("countdown").innerHTML = u + "小时 ";
          document.getElementById("countdown").innerHTML += d + "分钟 ";
          document.getElementById("countdown").innerHTML += c + "秒 ";
        } catch (t) {}
        (e = b.getTasksTimers()).forEach(function (t) {
          let e = `${t.sourceType}${t.sourceId}`;
          let a = x.dateObjectToHumanTime(t.endTime - t.currentTime);
          if (t.isPaused) {
            $(`#${e}`).text(`活动任务: ${a} 暂停`);
          } else if (t.isEnded) {
            $(`#${e}`).text(`活动任务:: ${a} 结束`);
          } else {
            $(`#${e}`).text(`活动任务:: ${a} 剩余时间`);
          }
        });
      }, s.TICK_RATE);
    })();
    $("#dayToday").text(r.todayName());
    if (t !== null) {
      $("#major-not-signed-up").hide();
    } else {
      $("#schedule-page-content").hide();
    }
    (function () {
      let t = $("#schedule-punishments-container");
      for (let e of a) {
        let a = h.getPunishmentById(e);
        let s = d.getImage(a.id, "punishment");
        let r = s.url;
        a = x.entityApplyMultipliersToText(a);
        let i = $("<div class=\"col-md-6 object-info border border-dark bg-light\">");
        let o = $("<div class=\"col col-4\">");
        let l = $("<div class=\"col col-7\">");
        o.append($(`<img class="img-fluid card-img-top hoverable" src="${r}.webp" onerror="this.onerror=null; this.src='${r}.jpg'">`).on("click", function () {
          let t = {
            entityId: a.id
          };
          dt.ViewPunishment(t);
        }));
        l.append($(`<h6 class="text-center">${a.name}</h6>`)).append($("<p class=\"text-center\">").text(a.description)).append($("<div class=\"btn-group\">").append($("<button class=\"btn btn-success btn-sm\">完成</button>").on("click", function () {
          E.completePunishment(a.id);
        })).append($("<button class=\"btn btn-warning btn-sm\">重新随机</button>").on("click", function () {
          E.rerollPunishment(a.id);
        })).append($("<button class=\"btn btn-danger btn-sm\">解除</button>").on("click", function () {
          E.failPunishment(a.id);
        })));
        i.append($("<div class=\"row\">").append(o).append(l));
        t.append(i);
      }
    })();
    (function () {
      let t = $("#schedule-classes-container");
      for (let s of i) {
        let i = f.getClassById(s);
        let l = d.getImage(i.id, "class");
        let n = l.url;
        let u = Y.calculateTaskBonusPoints(i.tags);
        let c = f.getClassDailyTaskcredits(i) + u;
        let h = r.classExamcredits(i) + u;
        let g = o.find(t => t == s);
        let m = a.length > 0;
        i = x.entityApplyMultipliersToText(i);
        let p = $("<div class=\"col-md-6 object-info border border-dark bg-light\">");
        let y = $("<div class=\"col col-4\">");
        let b = $("<div class=\"col col-7\">");
        y.append($(`<img class="img-fluid card-img-top hoverable" src="${n}.webp" onerror="this.onerror=null; this.src='${n}.jpg'">`).on("click", function () {
          let t = {
            entityId: i.id
          };
          dt.ViewClass(t);
        })).append($(`<h6 class="text-center">${i.name}</h6>`));
        let w = e.find(t => t.sourceId == i.id);
        if (w) {
          let t;
          switch (w.sourceOption) {
            case "daily1":
              t = "Daily option 1:";
              break;
            case "daily2":
              t = "Daily option 2:";
              break;
            case "exam1":
              t = "Exam option 1:";
              break;
            case "exam2":
              t = "Exam option 2:";
          }
          b.append($(`<h5 class="text-left">已激活任务 - ${t}</h5>`)).append($(`<p class="text-left">${w.description}</p>`));
          b.append($("<button class=\"btn btn-warning btn-sm\">暂停</button>").on("click", Y.pauseTask.bind(this, w)));
          b.append($("<button class=\"btn btn-success btn-sm\">恢复</button>").on("click", Y.resumeTask.bind(this, w)));
          b.append($("<button class=\"btn btn-dark btn-sm\">惩罚</button>").on("click", Y.punishTask.bind(this, w)));
          b.append($("<button class=\"btn btn-danger btn-sm\">失败</button>").on("click", Y.failTask.bind(this, w)));
        } else {
          b.append($("<h5 class=\"text-left\">").text("完成任务可获得: (" + c + " 学分)")).append($("<p class=\"text-left\">").append($("<button class=\"btn btn-primary btn-sm\">选项 1</button>").on("click", function () {
            let t = {
              entityId: i.id,
              entityType: "class",
              entityOption: "daily1"
            };
            dt.ViewTask(t);
          })).append(`${i.daily1}`)).append($("<p class=\"text-left\">").append($("<button class=\"btn btn-primary btn-sm\">选项 2</button>").on("click", function () {
            let t = {
              entityId: i.id,
              entityType: "class",
              entityOption: "daily2"
            };
            dt.ViewTask(t);
          })).append(`${i.daily2}`));
          b.append($("<h5 class=\"text-left\">").text("完成考试可获得: (" + h + " 学分)"));
          if (g && !m) {
            b.append($("<p class=\"text-left\">").append($("<button class=\"btn btn-primary btn-sm\">考试 1</button>").on("click", function () {
              let t = {
                entityId: i.id,
                entityType: "class",
                entityOption: "exam1"
              };
              dt.ViewTask(t);
            })).append(`${i.exam1}`)).append($("<p class=\"text-left\">").append($("<button class=\"btn btn-primary btn-sm\">考试 2</button>").on("click", function () {
              let t = {
                entityId: i.id,
                entityType: "class",
                entityOption: "exam2"
              };
              dt.ViewTask(t);
            })).append(`${i.exam2}`));
          } else {
            y.append($("<p>至少参加一次课程，并完成你的惩罚才会解锁考试。</p>"));
            b.append($("<p class=\"text-left\">").append($("<button class=\"btn btn-primary btn-sm disabled\">考试 1</button>")).append(`${i.exam1}`)).append($("<p class=\"text-left\">").append($("<button class=\"btn btn-primary btn-sm disabled\">考试 2</button>")).append(`${i.exam2}`));
          }
        }
        b.append($(`<div class="lead" id="class${i.id}">`).text(""));
        p.append($("<div class=\"row\">").append(y).append(b));
        t.append(p);
      }
    })();
    (function () {
      let t = $("#schedule-clubs-container");
      for (let e of m) {
        let a = c[e];
        let s = d.getImage(a.id, "partner");
        let r = s.url;
        let i = $("<div class=\"\" id=\"clubButtons\">");
        let o = $("<div class=\"col-md-6 object-info border border-dark bg-light\">");
        let l = $("<div class=\"col col-4\">");
        let n = $("<div class=\"col col-7\">");
        l.append($(`<img class="img-fluid card-img-top hoverable" src="${r}.webp" onerror="this.onerror=null; this.src='${r}.jpg'">`).on("click", function () {
          let t = {
            entityId: e
          };
          dt.ViewPartner(t);
        })).append($(`<h6 class="text-center">${a.name}</h6>`));
        n.append($("<p class=\"text-left\">").text("奖励 1: " + a.perk1)).append($("<p class=\"text-left\">").text("社团活动任务 1: " + a.job1)).append($("<p class=\"text-left\">").text("奖励 2: " + a.perk2)).append($("<p class=\"text-left\">").text("社团活动任务 2: " + a.job2)).append(i);
        let u = g.getActivePartnerPerks();
        let h = u.findIndex(t => t.sourceId == e);
        if (u[h].perk1 == 0) {
          i.append($("<button class=\"btn btn-success btn-sm btn-margin\">选择奖励 1</button>").on("click", q.activatePartnerPerk.bind(this, a.id, 1)));
        } else {
          i.append($("<button class=\"btn btn-danger btn-sm btn-margin\">已激活奖励</button>"));
        }
        if (u[h].perk2 == 0) {
          i.append($("<button class=\"btn btn-success btn-sm btn-margin\">选择奖励 2</button>").on("click", q.activatePartnerPerk.bind(this, a.id, 2)));
        } else {
          i.append($("<button class=\"btn btn-danger btn-sm btn-margin\">已激活奖励</button>"));
        }
        o.append($("<div class=\"row\">").append(l).append(n));
        t.append(o);
      }
      for (let e of u) {
        let a = n[e];
        let s = d.getImage(a.id, "club");
        let r = s.url;
        let i = $("<div class=\"\" id=\"clubButtons\">");
        let o = $("<div class=\"col-md-6 object-info border border-dark bg-light\">");
        let l = $("<div class=\"col col-4\">");
        let u = $("<div class=\"col col-7\">");
        l.append($(`<img class="img-fluid card-img-top hoverable" src="${r}.webp" onerror="this.onerror=null; this.src='${r}.jpg'">`).on("click", function () {
          let t = {
            entityId: e
          };
          dt.ViewClub(t);
        })).append($(`<h6 class="text-center">${a.name}</h6>`));
        u.append($("<p class=\"text-left\">").text("奖励 1: " + a.perk1)).append($("<p class=\"text-left\">").text("任务 1: " + a.job1)).append($("<p class=\"text-left\">").text("奖励 2: " + a.perk2)).append($("<p class=\"text-left\">").text("任务 2: " + a.job2)).append(i);
        let c = g.getActiveClubPerks();
        let h = c.findIndex(t => t.sourceId == e);
        if (c[h].perk1 == 0) {
          i.append($("<button class=\"btn btn-success btn-sm btn-margin\">选择奖励 1</button>").on("click", q.activateClubPerk.bind(this, a.id, 1)));
        } else {
          i.append($("<button class=\"btn btn-danger btn-sm btn-margin\">取消奖励 1</button>").on("click", q.activateClubPerk.bind(this, a.id, 1)));
        }
        if (c[h].perk2 == 0) {
          i.append($("<button class=\"btn btn-success btn-sm btn-margin\">选择奖励 2</button>").on("click", q.activateClubPerk.bind(this, a.id, 2)));
        } else {
          i.append($("<button class=\"btn btn-danger btn-sm btn-margin\">取消奖励 2</button>").on("click", q.activateClubPerk.bind(this, a.id, 2)));
        }
        o.append($("<div class=\"row\">").append(l).append(u));
        t.append(o);
      }
    })();
    $("#classSkipsAvailable").text(f.getClassSkipsAvailable());
    (function () {
      let t = S.getFinalTaskMultiplier();
      let e = Math.round(t * 100 - 100).toString() + "%";
      $("#taskRequirementsMultiplier").text(e);
    })();
    (function () {
      let t = $("#schedule-table-container");
      let e = f.getCurrentClasses().sort((t, e) => t - e);
      let a = $("<td>");
      let s = $("<td>");
      let r = $("<td>");
      let i = $("<td>");
      let o = $("<td>");
      for (let t of e) {
        let e = f.getClassById(t);
        let l = e.days.split(" ").filter(t => t);
        if (l.some(t => t == 1)) {
          let s = $(`<a class="text">${e.name}</a><br>`).on("click", function () {
            let e = {
              entityId: t
            };
            dt.ViewClass(e);
          });
          a.append(s);
        }
        if (l.some(t => t == 2)) {
          let a = $(`<a class="text">${e.name}</a><br>`).on("click", function () {
            let e = {
              entityId: t
            };
            dt.ViewClass(e);
          });
          s.append(a);
        }
        if (l.some(t => t == 3)) {
          let a = $(`<a class="text">${e.name}</a><br>`).on("click", function () {
            let e = {
              entityId: t
            };
            dt.ViewClass(e);
          });
          r.append(a);
        }
        if (l.some(t => t == 4)) {
          let a = $(`<a class="text">${e.name}</a><br>`).on("click", function () {
            let e = {
              entityId: t
            };
            dt.ViewClass(e);
          });
          i.append(a);
        }
        if (l.some(t => t == 5)) {
          let a = $(`<a class="text">${e.name}</a><br>`).on("click", function () {
            let e = {
              entityId: t
            };
            dt.ViewClass(e);
          });
          o.append(a);
        }
      }
      let l = $("<div class=\"table-responsive\">");
      let n = $("<table class=\"table table-bordered\">");
      n.append($("<thead>").append($("<tr>").append($("<th scope=\"col\">").text("星期一")).append($("<th scope=\"col\">").text("星期二")).append($("<th scope=\"col\">").text("星期三")).append($("<th scope=\"col\">").text("星期四")).append($("<th scope=\"col\">").text("星期五")))).append($("<tbody>").append($("<tr>").append(a).append(s).append(r).append(i).append(o)));
      l.append(n);
      t.append(l);
    })();
  }
}
class H {
  static view() {
    H.LoadHtml();
    H.LoadData();
  }
  static LoadHtml() {
    $("main").html("\n            <div class=\"container text-center\" id=\"major-not-signed-up\">\n        <h1 class=\"alert alert-danger\">你还没选择专业！</h1>\n    </div>\n\n    <div class=\"container text-center\" id=\"progress-page-content\">\n        <div class=\"bg-light\">\n            <h4 class=\"bg-dark text-white hoverable\" data-toggle=\"collapse\" href=\"#progress-active-major\" role=\"button\"\n                aria-expanded=\"true\" aria-controls=\"progress-active-major\">主要课程:</h4>\n            <div id=\"progress-active-major\" class=\"collapse show\"></div>\n        </div>\n        <br>\n\n\n        <div class=\"bg-light\">\n            <h4 class=\"bg-dark text-white hoverable\" data-toggle=\"collapse\" href=\"#progress-active-classes\" role=\"button\"\n                aria-expanded=\"true\" aria-controls=\"progress-active-classes\">已选课程：\n                <a id=\"currentClassesNum\"></a>/<a id=\"maxCurrentClasses\"></a></h4>\n            <div id=\"progress-active-classes\" class=\"collapse show\">\n            </div>\n        </div>\n        <br>\n\n        <div class=\"bg-light\">\n\n        </div>\n        <h4 class=\"bg-dark text-white hoverable\" data-toggle=\"collapse\" href=\"#progress-mandatory-classes\" role=\"button\"\n            aria-expanded=\"true\" aria-controls=\"progress-mandatory-classes\">必修课程:</h4>\n        <div id=\"progress-mandatory-classes\" class=\"collapse show\">\n        </div>\n        <br>\n\n        <h4 class=\"bg-dark text-white hoverable\" data-toggle=\"collapse\" href=\"#progress-completed-classes\" role=\"button\"\n            aria-expanded=\"true\" aria-controls=\"progress-completed-classes\">已修课程 </h4>\n        <div id=\"progress-completed-classes\" class=\"collapse show\">\n        </div>\n        <br>\n\n        <div class=\"bg-light\">\n\n        </div>\n        <h4 class=\"bg-dark text-white hoverable\" data-toggle=\"collapse\" href=\"#progress-class-counters\" role=\"button\"\n            aria-expanded=\"true\" aria-controls=\"progress-class-counters\">已完成课程数:</h4>\n        <div id=\"progress-class-counters\" class=\"collapse show\">\n            <h5>入门课程: <a id=\"completedBeginnerClassesNum\"></a></h5>\n            <h5>普通课程: <a id=\"completedIntermediateClassesNum\"></a></h5>\n            <h5>高级课程:<a id=\"completedAdvancedClassesNum\"></a></h5>\n            <h5>大师课程: <a id=\"completedMasterClassesNum\"></a></h5>\n        </div>\n        <br>\n\n        <div class=\"bg-light\">\n\n        </div>\n        <div id=\"progress-punishments-counters hoverable\" class=\"bg-light\">\n            <h4 class=\"bg-dark text-white\">已处分次数: <a id=\"punishmentsDoneNum\"></a></h4>\n        </div>\n        <br>\n    </div>");
  }
  static LoadData() {
    if (function () {
      let t = l.getCurrentMajor();
      if (t != null) {
        $("#major-not-signed-up").hide();
      }
      if (t == null) {
        $("#progress-page-content").hide();
        return false;
      }
      let e = $("<div id=\"roulette-result\">");
      let a = d.getImage(t.id, "major").url;
      let s = $("<div class=\"major-info\">").append($("<div class=\"row\">").append($("<div class=\"col-md-6\">").append($("<div class=\"row pt-2\">").append($("<div class=\"col\">").append($(`<img class="img-fluid" style="max-height: 300px" src="${a}.webp" onerror="this.onerror=null; this.src='${a}.jpg'">`)).on("click", function () {
        let e = {
          entityId: t.id
        };
        dt.ViewMajor(e);
      })).append($("<div class=\"col\">").append($("<h4>").text(t.name)).append($("<p>").text(t.description)).append($("<button class=\"btn btn-success\">专业毕业!</a>").on("click", function () {
        F.choseFinalThesis();
      }))))).append($("<div class=\"col-md-6\">").append($("<div class=\"row pt-2\">").append($("<div class=\"col\">").append($("<img class=\"img-fluid\" style=\"max-height: 300px\" src=\"img/image1089.webp\" onerror=\"this.onerror=null; this.src='img/image1089.jpg'\">")).on("click", function () {})).append($("<div class=\"col\">").append($("<h4>").text("性高潮轮盘")).append(e)))));
      $("#progress-active-major").append(s);
      if (C.isRouletteRolledToday()) {
        let t = V.rollRoullete();
        e.empty().append($("<br>")).append($(`<h6>${t.title}</h6>`)).append($(`<p>${t.description}</p>`));
      } else {
        e.append($("<p>").text("你想要高潮吗?试试运气吧!")).append($("<button class=\"btn btn-primary\">随机!</a>").on("click", function () {
          let t = V.rollRoullete();
          $("#roulette-result").empty().append($("<br>")).append($(`<h6>${t.title}</h6>`)).append($(`<p>${t.description}</p>`)).append($("<button class=\"btn btn-danger\">未经允许就高潮!</a>").on("click", function () {
            E.rollPunishment(1);
          }));
        })).append($("<hr>"));
      }
      e.append($("<button class=\"btn btn-danger\">未经允许就高潮!</a>").on("click", function () {
        E.rollPunishment(1);
      }));
    }() == 0) {
      return;
    }
    let t = f.getClassesData();
    let e = p.getClubsData();
    let a = h.getPunishmentsData();
    (function () {
      let t = f.getCurrentClasses();
      let e = t.sort((t, e) => t - e);
      let a = $("#progress-active-classes");
      let r = $("<div class=\"row\">");
      for (let t of e) {
        let e = f.getClassById(t);
        let a = $("<div class=\"col-auto\">");
        let s = d.getImage(e.id, "class");
        let i = s.url;
        let o = $("<div class=\"card border-dark\" >");
        o.append($(`<img class="card-img-top hoverable" src="${i}.webp" onerror="this.onerror=null; this.src='${i}.jpg'">`)).on("click", function () {
          let t = {
            entityId: e.id
          };
          dt.ViewClass(t);
        }).append($("<h4 class=\"card-title\">").text(e.name).append($("<h5>").text(e.tier.charAt(0).toUpperCase() + e.tier.slice(1))));
        r.append(a.append(o));
      }
      a.append(r);
      $("#currentClassesNum").text(t.length);
      $("#maxCurrentClasses").text(s.MAX_ACTIVE_CLASSES);
    })();
    (function () {
      let e = l.getCurrentMajor();
      let a = m.traversePrerequisites(e);
      let s = f.getCompletedClasses();
      let r = $("#progress-mandatory-classes");
      let i = $("<div class=\"row\">");
      for (let e of a) {
        let a = t[e];
        let r = $("<div class=\"col-auto\">");
        let o = d.getImage(a.id, "class");
        let l = o.url;
        let n = $("<div class=\"card border-dark\" >");
        n.append($(`<img class="card-img-top hoverable" src="${l}.webp" onerror="this.onerror=null; this.src='${l}.jpg'">`)).on("click", function () {
          let t = {
            entityId: a.id
          };
          dt.ViewClass(t);
        }).append($("<h4 class=\"card-title\">").text(a.name).append($("<h5>").text(a.tier.charAt(0).toUpperCase() + a.tier.slice(1))));
        if (s.find(t => t == e)) {
          n.append($("<a href=\"\" class=\"indicator-complete\">Completed</a>"));
        }
        i.append(r.append(n));
      }
      r.append(i);
    })();
    (function () {
      let e = f.getCompletedClasses();
      let a = e.sort((t, e) => t - e);
      let s = $("#progress-completed-classes");
      let r = $("<div class=\"row\">");
      if (e.length <= 0) {
        s.append(r.append($("<div class=\"col\">").append($("<h4>").text("无"))));
      }
      for (let e of a) {
        let a = t[e];
        let s = $("<div class=\"col-auto\">");
        let i = d.getImage(a.id, "class");
        let o = i.url;
        let l = $("<div class=\"card border-dark\" >");
        l.append($(`<img class="card-img-top hoverable" src="${o}.webp" onerror="this.onerror=null; this.src='${o}.jpg'">`)).on("click", function () {
          let t = {
            entityId: a.id
          };
          dt.ViewClass(t);
        }).append($("<h4 class=\"card-title\">").text(a.name).append($("<h5>").text(a.tier.charAt(0).toUpperCase() + a.tier.slice(1))));
        r.append(s.append(l));
      }
      s.append(r);
    })();
    (function () {
      let t = h.getCurrentPunishments();
      let e = $("#progressLoadPunishments");
      let s = $("<div class=\"row\">");
      for (let e of t) {
        let t = a[e];
        let r = $("<div class=\"col-auto\">");
        let i = $("<div class=\"card\" >");
        let o = d.getImage(t.id, "punishment");
        let l = o.url;
        i.append($(`<img class="card-img-top hoverable" src="${l}.webp" onerror="this.onerror=null; this.src='${l}.jpg'">`)).on("click", function () {
          let e = {
            entityId: t.id
          };
          dt.ViewPunishment(e);
        }).append($("<h5 class=\"card-title\">").text(t.name));
        $(s).append(r.append(i));
      }
      e.append(s);
      $("#currentPunishmentsNum").text(t.length);
      $("#maxPunishmentsNum").text(h.getMaxPunishments());
    })();
    (function () {
      let t = p.getActiveClubs();
      let a = $("#progressLoadClubs");
      let r = $("<div class=\"row\">");
      for (let a of t) {
        let t = e[a];
        let s = $("<div class=\"col-auto\">");
        let i = $("<div class=\"card\" >");
        let o = d.getImage(t.id, "club");
        let l = o.url;
        i.append($(`<img class="card-img-top hoverable" src="${l}.webp" onerror="this.onerror=null; this.src='${l}.jpg'">`)).on("click", function () {
          let e = {
            entityId: t.id
          };
          dt.ViewClub(e);
        }).append($("<h5 class=\"card-title\">").text(t.name));
        $(r).append(s.append(i));
      }
      a.append(r);
      $("#currentClubsNum").text(t.length);
      $("#maxClubsNum").text(s.MAX_CLUBS);
    })();
    (function () {
      let e = f.getCompletedClasses();
      let a = 0;
      let s = 0;
      let r = 0;
      let i = 0;
      let o = JSON.parse(localStorage.getItem("advancedClassesRequired"));
      for (let o of e) {
        let e = t[o];
        if (e.id.charAt(0) == "1") {
          a++;
        } else if (e.id.charAt(0) == "2") {
          s++;
        } else if (e.id.charAt(0) == "3") {
          r++;
        } else if (e.id.charAt(0) == "4") {
          i++;
        }
      }
      $("#completedBeginnerClassesNum").text(a);
      $("#completedIntermediateClassesNum").text(s);
      $("#completedAdvancedClassesNum").text(r);
      $("#maxAdvancedClassesNum").text(o);
      $("#completedMasterClassesNum").text(i);
      let l = localStorage.getItem("punishmentsDoneNum");
      $("#punishmentsDoneNum").text(l);
    })();
    (function () {
      let t = $(".progressButtonGraduate");
      let e = $("<button class=\"btn btn-success\">").text("Graduate!").on("click", function () {
        F.choseFinalThesis();
      });
      t.append(e);
    })();
  }
}
class W {
  static view() {
    W.LoadHtml();
    W.LoadData();
  }
  static LoadHtml() {
    $("main").html("\n        <div class=\"container text-center\">\n        <h4 class=\"text-center\">快速通知:</h4>\n        <h5>\n            所有游戏数据都存储在浏览器中。除了排行榜，没有任何东西是在线发送或存储的。<br>\n            私人浏览模式不保存数据，所以请确保在普通浏览器窗口中游玩。不要删除你的cookie。 \n        </h5>\n\n\n        <h3 class=\"bg-dark text-white\" data-toggle=\"collapse\" href=\"#how-to-play-container\" role=\"button\"\n            aria-expanded=\"true\" aria-controls=\"how-to-play-container\">如何游玩:</h3>\n\n        <div id=\"how-to-play-container\" class=\"collapse show\">\n            <hr>\n            <h3 class=\"text-center\">快速指南</h3>\n            1. 选择一个专业<br>\n            2. 选择必修课程和辅修课程 <br>\n            3.加入社团和选择姬友，让事情变得更困难/更容易。 <br>\n            4. 如果你想要高潮，那就ROLL性高潮轮盘吧<br>\n            5. 参加并通过课程获得160学分 <br>\n            6. 不上课，你会受到处分<br>\n            7. 毕业<br>\n            - 所有性玩具的尺寸一开始都是最小的，并且宽度指的是最宽的部分和总长度(插入长度通常较小)。如果你愿意，你可以用大一点的。查看购物清单了解更多信息。<br>\n            -你可以点击标题栏，例如上面写着“如何游玩”的标题栏来折叠/展开它们<br>\n            - 本页底部有一个紧凑的课程列表。<br>\n            <p class=\"text text-left\">\n            </p>\n            <h3 class=\"text-center\">专业</h3>\n            <p class=\"text text-left\">\n                选择一个你感兴趣的 专业，这取决于你想专攻什么。每个专业都有特定的必修课程(有前置课程要求)，每个课程都有自己的前置课程。一旦你加入了一个专业就去进度页面查看你的必修课。 你需要取得160点学分在试图毕业之前。 如果你决定改变你的专业，你可以去专业页面，取消专业，但这将导致你会获得10个处分。 \n            </p>\n            <h3 class=\"text-center\">课程和时间表</h3>\n            <p class=\"text text-left\">\n                每个课程都有一个你需要注意的每周课程表。 你需要完成两项日常任务中的一项来计算出勤率。如果你在一天结束前没有去上课，处分将自动为那节课随机生成。要解锁课程的考试，你需要参加至少一次课程，并没有任何未完成的处分。 一旦你通过了一门课程，如果你愿意，你可以立即报名参加另一门课程。 一旦通过考试，你就不能再去上课了。您不能选择超过 8节课程。 如果你跟不上进度，就不要选太多的课。\n                周末也可以上课。周末的课程是可选的，你不会因为逃课而受到处分。</b>\n            </p>\n            <h3 class=\"text-center\">处分</h3>\n            <p class=\"text text-left\">\n                - 如果你在一天结束之前没有参加某项课程、完成某项日常任务或者考试失败，系统会自动给你随机一个处分。 <br>\n                - 如果你做任务的时候失败了，你必须按下“失败”按钮来接受处分。 <br>\n                - 如果你暂停一个任务超过4小时你将会受到处分。  <br>\n                - 你可以在任何时候完成你的处分。<br>\n                - 你最多可以受到 <span id=\"maxPunishments\"></span> 个处分<br>\n                - 如果你有未完成的处分，你将不能完成考试或者毕业。<br>\n                - 日常任务失败，你将受到1个处分；考试失败，2个！专业考试失败，就是5个处分！\n            </p>\n            <h3 class=\"text-center\">社团</h3>\n            <p class=\"text text-left\">\n                -社团会给你提供各种特殊奖励（比如公假条和减少课程任务的要求）<br>\n                -社团是你日常课业的良好补充，你可以任意组合社团任务和课程。 <br>\n                -一些社团任务会和课程的任务重复（比如宗教研习会和贞操管理课程）。这种情况下只要完成课程就可以获得社团奖励。 <br>\n                -当你上课的时候确保你有社团活动任务的道具，你要一直保持佩戴社团任务的要求道具。如果你激活了一个社团活动要求你佩戴口塞，而你的课程持续八小时。你当然不可能佩戴八个小时的口塞，所以当你开始课程的时候要关闭这个奖励。<br>\n                -你最多可以加入5个社团，这样你最多可以有10个激活的社团奖励。\n                -在学习后期你将会解锁精英社团，它们将提供更棒的奖励但是任务也讲更加艰巨。<br>\n                -注意你只能加入一个精英社团。<br>\n                -普通社团奖励可以被激活和关闭，但是精英社团奖励每天只能激活一次。<br>\n                -所有激活的奖励将会在第二天重置。<br>\n                -注意，你最多可以从社团奖励中获得50%的课程任务减免。如果你的普通社团减免了50%而精英社团也减免了25%，你仍然只拥有50%而不是75%.\n            </p>\n            <h3 class=\"text-center\">姬友</h3>\n            <p class=\"text text-left\">\n                姬友和社团很相似，唯一的不同是姬友会让课程和考试更加困难，但是相应的，你会获得更多的学分。你最多可以拥有3个姬友。她们的奖励每天只能激活一次，第二天会自动关闭。\n            </p>\n            <h3 class=\"text-center\">任务和计时系统</h3>\n            <p class=\"text text-left\">\n                在大学读书期间你要熟悉你专业和课程的任务系统。在课程表页面你可以选择通过哪个任务来完成你的课程。一旦你选择了一个选项，你将会被带到任务页面，在那里你可以开始任务并倒计时或者按下“完成”（如果这个课程不需要计时的话）。你可以在一天之内随时暂停和恢复计时器。但是计时器会在一天的结束时结算（除了时间超过一天的任务）。如果任务一直持续到第二天，你不会受到处分。如果你任务失败的话，你必须按下“失败”按钮，并接受一个处分。你也可以在课程表页面看到每个激活的课程计时器。\n            </p>\n            <h3 class=\"text-center\">学分系统</h3>\n            <p class=\"text text-left\">\n                想要毕业，你必须获得 <span class=\"creditsToGrad\"></span>  学分。 也就是你必须至少完成4个入门课程、5个普通课程、6个高级课程和两个大师课程。 不同的活动会奖励你不同数量的学分。<br>\n                以下列出不同课程的学分数：<br>\n                - 入门课程: 出勤：1分; 完成考试: 3分; 退选：扣2分;<br>\n                - 普通课程: 出勤: 2分; 完成考试: 6分; 退选: 扣4分;<br>\n                - 高级课程: 出勤: 3分; 完成考试: 9分; 退选: 扣6分;<br>\n                - 大师课程: 出勤: 4分; 完成考试: 12分; 退选: 扣8分;<br>\n                - - 轻型处分: 重新随机: 扣1分; 失败: 扣2分 <br>\n                - - 重型处分: 重新随机: 扣2分; 失败: 扣4分 <br>\n            </p>\n            <h3 class=\"text-center\">毕业</h3>\n            <p class=\"text text-left\">\n                只要你完成所有必修课程并修满<span class=\"creditsToGrad\"></span>\n                学分（你可以选一些其他课程来凑够这些分数，如果想学得更扎实也写，也可以重修你的必修课），你就可以尝试毕业。一些专业的毕业论文可能需要一个月来完成。如果你在做毕业任务的时候失败了，你必须按下“失败”按钮，这回为你随机10个处分。你可以通过接受处罚来获得延期完成毕业任务的机会。 一旦你毕业了，你的专业会被标记为完成，其他所有的进度会被重置。你可以选择另外一个领域的另一个专业。这会在你将来的职业生涯中非常有用。\n            </p>\n            <h3 class=\"text-center\">性高潮轮盘 </h3>\n            <p class=\"text text-left\">\n                你只有在课程有要求时才能高潮。不然只能通过性高潮轮盘才能获得高潮的机会。你可以在进度页面的顶端找到高潮轮盘。每天你都有机会转一次，看看你是不是幸运。 你有： <br>\n                - 30% 的机会 不能高潮 <br>\n                - 20% 的机会 寸止 <br>\n                - 10% 的机会 毁灭高潮 <br>\n                - 10% 的机会(菊穴/前列腺)高潮 <br>\n                - 10% 的机会 允许高潮 <br>\n                - 10% 的机会 随机一个处分 <br>\n                - 10% 的机会 在网上问一个陌生人自己能不能高潮 <br>\n            </p>\n        </div>\n        <hr>\n        <h3 class=\"bg-dark text-white\" data-toggle=\"collapse\" href=\"#info-shopping-list\" role=\"button\"\n            aria-expanded=\"true\" aria-controls=\"info-shopping-list\">Shopping list:</h3>\n        <div id=\"info-shopping-list\" class=\"collapse show\">\n            <h6>Shopping list with required and optional items. Linked ones are recommendations, feel free to use your\n                own. Protip: When buying from Aliexpress, use \"Aliexpress Standard Shipping\" which costs 1-2$ but provides tracking and 14-21 days delivery.</h6>\n            <p class=\"text-left\">\n                - Dildo 2.5/14cm (~1.0/5.5inch) (diameter/length) - this will be size S \n                <a href=\"https://www.aliexpress.com/item/2016-suction-cup-dildo-realistic-sex-toys-for-woman-penis-small-dildo-flesh-dildo-sex-products/32659778432.html\" target=\"_blank\" >LINK</a> <br>\n                - Dildo 3/15cm (~1.2/6inch) (diameter/length) - this will be size M \n                <a href=\"https://www.aliexpress.com/item/Silicone-Realistic-Soft-Jelly-Dildo-G-Spot-Clitoris-Stimulation-Vibrator-Sex-Toys-for-Women-Sex-Product/32957880747.html\" target=\"_blank\" >LINK</a> <br>\n                - Dildo 4/21cm (~1.55/8inch) (diameter/length) - this will be size L \n                <a href=\"https://www.aliexpress.com/item/Insertable-7-28-185mm-big-long-thick-dildo-fake-Penis-dong-realistic-artificial-cock-sex-products/32522231222.html\" target=\"_blank\" >LINK</a> <br>\n                - Dildo 4.5/23cm (~1.77/9inch) (diameter/length) - this will be size XL \n                <a href=\"https://www.aliexpress.com/item/8-9-inch-23cm-long-d-4-5-cm-big-dildo-with-suction-cup-sex-penis/32726634784.html\" target=\"_blank\" >LINK</a> <br>\n                - Dildo 5/28cm (~2.00/11inch) (diameter/length) - this will be size XXL \n                <a href=\"https://www.aliexpress.com/item/8-9-inch-23cm-long-d-4-5-cm-big-dildo-with-suction-cup-sex-penis/32726634784.html\" target=\"_blank\" >LINK</a> <br>\n                - Set with sizes S to L: \n                <a href=\"https://www.aliexpress.com/item/strapless-dildo-vibrator-adult-sex-toys-for-women-big-dildos-machine-consolador-sex-products-huge-anal/32686810457.html\" target=\"_blank\" >LINK</a><br>\n                - Dildo 3/34cm (~1.2/13inch) (diameter/length) - this will be size \"super long\" (only for the tentacle club)\n                <a href=\"https://www.aliexpress.com/item/2016-Hot-Adult-Sex-Products-130-340mm-Flexible-Soft-Lesbian-Double-Dildo/32757096278.html\" target=\"_blank\" >LINK</a><br>\n                <br>\n                - Buttplug 25mm (~1inch) (diameter) - this will be size S \n                <a href=\"https://www.aliexpress.com/item/1pcs-Set-Stainless-Steel-Metal-Anal-safe-plug-medical-Anal-Beads-Anus-tube-Crystal-Waterproof-Adult/32901354074.html\" target=\"_blank\" >LINK</a> <br>\n                - Buttplug 35mm (~1.2inch) (diameter) - this will be size M \n                <a href=\"https://www.aliexpress.com/item/1pcs-Set-Stainless-Steel-Metal-Anal-safe-plug-medical-Anal-Beads-Anus-tube-Crystal-Waterproof-Adult/32901354074.html\" target=\"_blank\" >LINK</a> <br>\n                - Buttplug 40mm (~1.55inch) (diameter) - this will be size L \n                <a href=\"https://www.aliexpress.com/item/1pcs-Set-Stainless-Steel-Metal-Anal-safe-plug-medical-Anal-Beads-Anus-tube-Crystal-Waterproof-Adult/32901354074.html\" target=\"_blank\" >LINK</a> <br>\n                - Buttplug 50mm (~2inch) (diameter) - this will be size XL \n                <a href=\"https://www.aliexpress.com/item/50mm-large-big-pyrex-glass-Anal-butt-plug-beads-ball-dildo-Sex-toys-Adult-products-for/32222809698.html\" target=\"_blank\" >LINK</a> <br>\n                - Alternative set with sizes S to L: \n                <a href=\"https://www.aliexpress.com/item/Adult-Diary-Silicone-Anal-Plug-Jewelry-Dildo-Vibrator-Sex-Toys-for-Woman-Prostate-Massager-Bullet-Vibrador/32845831474.html\" target=\"_blank\" >LINK</a> <br>\n                <br>\n                - Chastity cage (for chastity classes)\n                <a href=\"https://www.aliexpress.com/item/Prison-Bird-Amazing-Price-Small-Cage-The-100-Biosourced-resin-chastity-device-Cock-Cage-With-4/32767552450.html\" target=\"_blank\" >LINK</a><br>\n                - Prostate massager (optional for milking classes)\n                <a href=\"https://www.aliexpress.com/item/Quality-Male-Prostate-Massager-G-spot-Anal-Butt-Plug-Anal-Masturbator-Prostate-Stimulator-Adult-Erotic-Toys/32787804324.html\" target=\"_blank\" >LINK</a><br>\n                - Ballgag (for bondage classes and clubs)\n                <a href=\"https://www.aliexpress.com/item/Adult-Games-Mouth-Gag-Silicone-Ball-Oral-Fixation-PU-Leather-Band-BDSM-Bondage-Restraints-4-Colors/32755021776.html\" target=\"_blank\" >LINK</a>\n                - Ring gag (optional, for when you need to be gagged but also use your mouth)\n                <a href=\"https://www.aliexpress.com/item/Mouth-Gag-Oral-Leather-Open-bondage-Bite-Pleasure-Couples-Flirt-Fetish-Erotic-Slave-Sex-Products-Toys/32801221928.html\" target=\"_blank\" >LINK</a><br>\n                - Stockings or Pantyhose, Panties, Bra, Skirt or Dress, High Heels (for Feminization classes). <br>\n                - Wig, Makeup accessories (optional)\n                - Blidfold, Gag, Rope, Cuffs and shackles (for bondage classes and clubs) \n                <a href=\"https://www.aliexpress.com/item/2018-new-7pcs-set-Sexy-Lingerie-PU-Leather-Sex-Bondage-Set-Toy-Bondage-Restraint-Handcuffs-Sex/32843455313.html\" target=\"_blank\" >LINK</a><br>\n                - Maid Uniform (for the Maid club)\n                <a href=\"https://www.aliexpress.com/item/Sexy-French-Maid-Costume-Sweet-Gothic-Lolita-Dress-Anime-Cosplay-Sissy-Maid-Uniform-Plus-Size-Halloween/32801590897.html\" target=\"_blank\" >Uniform1 </a>\n                <a href=\"https://www.aliexpress.com/item/New-Sexy-Lolita-French-Maid-Cosplay-Costume-Dress-Halloween/32777378271.html\" target=\"_blank\" >Uniform2 </a>\n                <a href=\"https://www.aliexpress.com/item/Satin-Long-Gloves-Opera-Evening-Party-Prom-Costume-Fashion-Gloves/32662088095.html?spm=2114.13010708.0.0.32df4c4dwcs4XH\" target=\"_blank\" >Gloves </a>\n                <a href=\"https://www.aliexpress.com/item/1-Pair-Women-White-Stockings-Overknee-Winter-White-Stocking-Thigh-High-Knee-Hosiery-Cotton-Lace-Wave/32824743016.html\" target=\"_blank\" >Stockings </a>\n                <a href=\"https://www.aliexpress.com/item/Popular-in-Japan-Girl-Women-Sexy-velvet-Tights-fake-High-Stocking-Pantyhose-Mock-Bow-Suspender-High/32800607509.html\" target=\"_blank\" >Pantyhose </a> <br>\n                - Tail Buttplug (for Pet Play casses)\n                <a href=\"https://www.aliexpress.com/item/Sexy-Toys-Metal-Fake-Fur-Fox-Dog-Tail-Anal-Plug-Butt-Plug-BDSM-Flirt-Anus-Plug/32807557126.html\" target=\"_blank\" >LINK</a> <br>\n                - Animal ears (for Pet Play classes)\n                <a href=\"https://www.aliexpress.com/item/1pair-2pcs-Cat-Ears-Hair-Clips-Cute-Animal-Hair-Hoop-Ornament-Trinket-bandeau-Make-Up-Tool/32832307703.html\" target=\"_blank\" >LINK</a>\n                <a href=\"https://www.aliexpress.com/item/Hot-Sale-Women-Girls-Fashion-Fox-Plush-cat-ears-Headbands-hair-Accessories/32817598830.html\" target=\"_blank\" >LINK2</a> <br>\n                - Collar (for Pet Play casses)\n                <a href=\"https://www.aliexpress.com/item/New-4-color-PU-Leather-Plush-Neck-Sex-Collar-Fetish-Bondage-Adult-Games-Slave-Restraint-Flirting/32727168433.html\" target=\"_blank\">LINK</a> <br>\n                - Latex Catsuit (for Fetish classes) \n                <a href=\"http://www.latexcatfish.com/xcart/El-Gimperator.html\" target=\"_blank\" >LINK</a> <br>\n                - Magic Wand (not required anywhere, just for fun) \n                <a href=\"https://www.aliexpress.com/item/IKOKY-Big-Size-30-Speed-Vibrator-Powerful-Magic-Wand-Massager-Sex-Toys-for-Women-Clitoris-Stimulator/32839632762.html\" target=\"_blank\" >LINK</a><br>\n                - Estim/Electro (for the Science Club): <br>\n                Estim box \n                <a href=\"https://www.aliexpress.com/item/IKOKY-Therapy-Massager-Accessory-Electro-Stimulation-Electric-Dual-Output-Host-Pulse-Massage-Host-Electric-Shock/32889013470.html\" target=\"_blank\" >LINK</a><br>\n                Estim nipple clamps \n                <a href=\"https://www.aliexpress.com/item/Electric-Shock-Bullet-Anal-Plug-Pulse-Vibrator-Electro-Stimulation-Nipple-Clamps-Clitoris-Penis-Last-Erect-Massager/32957469349.html\" target=\"_blank\" >LINK</a><br>\n                Estim butt plugs \n                <a href=\"https://www.aliexpress.com/item/Electric-Shock-Bullet-Anal-Plug-Pulse-Vibrator-Electro-Stimulation-Nipple-Clamps-Clitoris-Penis-Last-Erect-Massager/32957469349.html\" target=\"_blank\" >LINK</a><br>\n                Estim penis rings \n                <a href=\"https://www.aliexpress.com/item/E-Stim-Monopolar-Conductive-Loops-Cock-Rings-and-Ball-Electro-Penis-Ring-Rubber-Tube-TENS-Electrodes/32708220829.html\" target=\"_blank\" >LINK</a><br>\n            <h5>Supplements:</h5>\n            <h6>Optional supplement stack to increase precum leaking and hornyness. Won't affect hormones or have ill\n                side effects. Order from <a href=\"https://iherb.com\" target=\"_blank\" >iHerb</a></h6>\n            <p class=\"text-left\">\n                - Lecithin - 1000-2000mg a day, increases cum loads. Make sure to get one from sunflowers. \n                Soy lecithin has estrogenic effects.<br>\n                - Zinc Picolinate - 50mg every other day. Increases erection strength, orgasm strength, hornyness and\n                cum volume.<br>\n                - Pygeum - 200mg a day (100mg twice a day), increases cum loads and improves prostate health.<br>\n                - L-Arginine - 5000mg (5gr) a day, improves erection strength. Often has ill side effects, I'd avoid it.\n                <br>\n                - Water - drink lots of it. Minimum of 2 liters (0.52 gallons) per day.<br>\n            </p>\n        </div>\n        <hr>\n        <h3 class=\"bg-dark text-white\" data-toggle=\"collapse\" href=\"#info-other\" role=\"button\"\n            aria-expanded=\"true\" aria-controls=\"info-other\">Other</h3>\n        <div id=\"info-other\" class=\"collapse show\">\n            <h5 class=\"text-center\">Additional Info:</h5>\n            <p class=\"text text-left\">\n                - Online places to share/request tasks: <br>\n                <a href=\"https://discord.gg/bYpvdfG\" target=\"_blank\" >The Sissy University Discord Chat</a><br>\n                <a href=\"https://boards.4chan.org/b/catalog\" target=\"_blank\" >4chan</a><br>\n                <a href=\"https://www.reddit.com/r/Chastity/\" target=\"_blank\" >Reddit - Chastity</a><br>\n                <a href=\"https://www.reddit.com/r/Sissies/\" target=\"_blank\" >Reddit - Sissies</a><br>\n                <a href=\"https://www.reddit.com/r/BDSMGW/\" target=\"_blank\" >Reddit - BDSM gone wild</a><br>\n                <a href=\"https://onesubmissiveact.com\" target=\"_blank\" >One Submissive Act</a><br>\n                - Buttplugs and chastity devices may be removed at any time for sanitation or health reasons. Do not\n                abuse\n                this.<br>\n                - All toy sizes are minimums. Feel free to use larger ones if you want. Buttplug diameter is measured at\n                the\n                widest part.<br>\n                - Anal tasks can be considered as done if you cum from anal, unless stated otherwise.<br>\n                - You can do multiple tasks from different classes and clubs at once (if possible).<br>\n                - Enema sizes are set in accordance to medical health guidelines.<br>\n                - For a fake cum you can use whatever recipe you like.<br>\n                - Cute underwear means bra and panties <br>\n                - Cute clothes are generally female stockings, leggings, skirts, dresses, female tops, corsets, bustiers\n                and high-heeled shoes.<br>\n                - Fetish gear are any clothes (including gloves/masks/hoods) made out of\n                latex/leather/pvc/vinyl/plastic.\n                Corsets (any material) and high heels over 6inch (15cm) also count. Small accessories don't count.<br>\n                - A \"full catsuit\" means a catsuit + gloves, socks and a hood. Just a \"catsuit\" may be without them.<br>\n            </p>\n            <h4 class=\"text-center\">Tutorials:</h4>\n            <div class=\"info-tutorials\">\n                <h5><a href=\"http://www.symtoys.com/ideas_bondkar1.html\" target=\"_blank\" >Rope harness tutorial</a></h5>\n                <h5><a href=\"https://www.likera.com/sb/tech/hogtie1.php\" target=\"_blank\" >Hogtie tutorial</a></h5>\n                <h5><a href=\"https://www.likera.com/sb/tech/hogtie2.php\" target=\"_blank\" >Advanced hogtie tutorial</a></h5>\n                <h5><a href=\"img/frogtie1.jpg\">Alternative hogtie</a><a href=\"img/frogtie2.jpg\" target=\"_blank\" > Result</a></h5>\n                <h5><a href=\"https://www.likera.com/blog/wp/archives/13432\" target=\"_blank\" >Mummification tutorial</a></h5>\n                <h5><a href=\"https://www.google.com/search?tbm=isch&q=chinch+noose\" target=\"_blank\" >Cinch noose</a></h5>\n                <h5>Simple \"bitchsuit\"</h5>\n                <p class=\"text text-left\">\n                    - Tie each one of your legs (ankle to hip). You can use either a rope or a belt. Then tie/cuff you each one\n                    of your wrists with a rope/chain in between them and pull the it behind your neck. See image below to get an\n                    idea.\n                    <br>\n                    <a href=\"img/bitchsuit.jpg\">\n                        <img src=\"img/bitchsuit.jpg\" alt=\"bitchsuit\" class=\"img-fluid\" style=\"max-height: 300px\">\n                    </a>\n                </p>\n            </div>\n        </div>\n        <hr>\n        <h3 class=\"bg-dark text-white\" data-toggle=\"collapse\" href=\"#info-files\" role=\"button\"\n            aria-expanded=\"true\" aria-controls=\"info-files\">Audio and video files</h3>\n        <div id=\"info-files\" class=\"collapse show\">\n            <h5>Hypnosis</h5>\n            <h6>Some recommended audio tracks and videos. Feel free to use your own. Also check: <a\n                    href=\"https://8ch.net/hypno/catalog.html\" target=\"_blank\" >8chan - hypno board</a><br>\n            </h6>\n            <p class=\"text-left\">\n                Hypno Audio - Bambi Bimbodoll Conditioning (Entry Level)\n                <a href=\"https://bambisleep.blogspot.com/2017/02/bambi-bimbodoll-conditioning.html\" target=\"_blank\" >INFO</a>\n                <a href=\"https://drive.google.com/file/d/0B8vLYK1NM6HbWGVaOVZLQTEtVE0/edit\" target=\"_blank\" >DOWNLOAD</a>\n                <br>\n                Hypno Audio - Bambi Training Loops (Upper Entry Level)\n                <a href=\"https://bambisleep.blogspot.com/2017/05/bambi-training-loops.html\" target=\"_blank\" >INFO</a>\n                <a href=\"https://drive.google.com/file/d/0B8vLYK1NM6HbUmstZXZFZC05cGM/edit\" target=\"_blank\" >DOWNLAOD</a>\n                <br>\n                Hypno Audio - Bambi Fuckdoll Brainwash (Advanced)\n                <a href=\"https://bambisleep.blogspot.com/2017/06/bambi-fuckdoll-brainwash.html\" target=\"_blank\" >INFO </a>\n                <a href=\"https://drive.google.com/file/d/0B8vLYK1NM6HbUnMzWFVwMzVvMDQ/edit\" target=\"_blank\" >DOWNLAOD</a>\n                <br>\n                Hypno Audio - Mistress Catgirl files\n                <a href=\"https://hypno-fetish.com/music/2311/mistress-catgirl/popout/1\" target=\"_blank\" >LINK</a>\n                <br>\n                Hypno Audio/Video -\n                <a href=\"https://youtu.be/ZrcxbJaXCCs\" target=\"_blank\" >Cat Girl Hypnosis</a>\n                <br>\n                Hypno Audio/Video -\n                <a href=\"https://www.youtube.com/watch?v=ArIf5pklBYY\" target=\"_blank\" >Dog Hypnosis</a>\n                <br>\n                Hypno Video -\n                <a href=\"https://www.pornhub.com/view_video.php?viewkey=ph56258bf3be096\" target=\"_blank\" >Training & Feminization 1</a>\n                <br>\n                Hypno Video -\n                <a href=\"https://www.pornhub.com/view_video.php?viewkey=ph579080b599f23\" target=\"_blank\" >Ultimate Feminizer</a>\n                <br>\n                Hypno Video -\n                <a href=\"https://www.pornhub.com/view_video.php?viewkey=ph59ea059b3e2d4\" target=\"_blank\" >Sissified Masturbation</a>\n                <br>\n            </p>\n            <h5>Instructions/Motivation</h5>\n            <p class=\"text-left\">\n                none\n            </p>\n            <h5>Sex Noise </h5>\n            <h6>(for sensory deprivation tasks and audio club)</h6>\n            <p class=\"text-left\">\n            - 15 minute mix - <a href=\"https://drive.google.com/open?id=1P8yTSAEMDEDfLjZYJvm25UDdQl_o5LXw\" target=\"_blank\" >Google Drive Link</a>\n            </p>\n        </div>\n        <h3 class=\"bg-dark text-white\">Compact course list (outdated)</h3>\n        <div id=\"info-files\" class=\"collapse show\">\n            <object data=\"img/course_list.svg\" type=\"image/svg+xml\" class=\"img-fluid\"></object>\n        </div>\n    </div>\n");
  }
  static LoadData() {
    $(".creditsToGrad").text(s.REQUIRED_CREDITS_GRADUATION);
    $("#maxClasses").text(s.MAX_ACTIVE_CLASSES);
    $("#maxPunishments").text(s.MAX_PUNISHMENTS);
  }
}
class z {
  static resetMajor() {
    let t = l.getCompletedMajors();
    localStorage.clear();
    localStorage.setItem("completedMajors", JSON.stringify(t));
    alert("Major progress has been reset");
    location.reload();
  }
  static resetGame() {
    localStorage.clear();
    alert("Game progress has been reset");
    location.reload();
  }
}
class B {
  static isCommunityContentEnabled() {
    return JSON.parse(localStorage.getItem("communityContentStatus"));
  }
  static setCommunityContentStatus(t) {
    localStorage.setItem("communityContentStatus", JSON.stringify(t));
  }
}
class J {
  static view() {
    J.LoadHtml();
    J.LoadData();
  }
  static LoadHtml() {
    $("main").html("<div class=\"container text-center\">\n        <h1>设置(仅在发生故障时使用)</h1>\n        <div id=\"resetButtons\"></div>\n        <iframe id=\"my_iframe\" style=\"display:none;\"></iframe>\n        <hr>\n        <h3>简单模式:</h3>\n        <a>简单模式允许在任何一天上课，并消除了逃课的惩罚。它也可以用作游戏的“暂停”。</a><br>\n        <div class=\"row text-center\">\n            <div class=\"col\" id=\"easymode-button\">\n            </div>\n        </div>\n        <hr>\n        <h3>极难处分:</h3>\n        <a>极难处分比普通的惩罚更残酷，存在只是为了新奇。 \n        它们在默认情况下是禁用的，除了增强的游戏玩法外，当启用它们时不会提供任何好处。</a><br>\n        <div class=\"row text-center\">\n            <div class=\"col\" id=\"hardcorePunishments-button\">\n            </div>\n        </div>\n        <hr>\n        <h3>社群内容:</h3>\n        <a>社群内容是由大家一起设计的内容。它可能会破坏游戏公平性，也有可能可以带来更有趣的体验。</a><br>\n        <div class=\"row text-center\">\n            <div class=\"col\" id=\"communityContent-button\">\n            </div>\n        </div>\n    </div>`;\n    </div>");
  }
  static LoadData() {
    $("#resetButtons").append($("<div class=\"row border settings-row\">").append($("<div class=\"col\">").text("有课程缺少吗?点击这里更新你的课程表。")).append($("<div class=\"col\">").append($("<button class=\"btn btn-primary btn-margin\">修复一下</button>").on("click", function () {
      P.calculateTodayClasses();
      alert("Updated today's schedule!");
    })))).append($("<div class=\"row border settings-row\">").append($("<div class=\"col\">").text("重置游戏(保存已完成的专业)")).append($("<div class=\"col\">").append($("<button class=\"btn btn-danger btn-margin\">重置</button>").on("click", function () {
      if (confirm("你想重置你的主要进度吗?")) {
        z.resetMajor();
      }
    })))).append($("<div class=\"row border settings-row\">").append($("<div class=\"col\">").text("完全重置游戏！！")).append($("<div class=\"col\">").append($("<button class=\"btn btn-danger btn-margin\">重置</button>").on("click", function () {
      if (confirm("导入保存数据")) {
        z.resetGame();
      }
    })))).append($("<div class=\"row border settings-row\">").append($("<div class=\"col\">").text("导入保存数据")).append($("<div class=\"col\">").append($("<div class=\"upload-btn-wrapper\">").append($("<button class=\"btn btn-success btn-margin\">导入</button>")).append($("<input type=\"file\" id=\"file-input\" accept=\".suSave\" />"))))).append($("<div class=\"row border settings-row\">").append($("<div class=\"col\">").text("导出保存数据")).append($("<div class=\"col\">").append($("<button href=\"\" class=\"btn btn-success btn-margin\">导出</button>").on("click", function () {
      O.exportLocStorage();
    }))));
    document.getElementById("file-input").addEventListener("change", O.importLocStorage, false);
    if (j.isEasyModeEnabled()) {
      $("#easymode-button").append($("<button class=\"btn btn-success btn-margin\">启用</button>").on("click", function () {
        j.switchEasyMode();
      }));
    } else {
      $("#easymode-button").append($("<button class=\"btn btn-danger btn-margin\">禁用</button>").on("click", function () {
        j.switchEasyMode();
      }));
    }
    if (h.IsUnlockedHardcorePunishments()) {
      $("#hardcorePunishments-button").append($("<button class=\"btn btn-success btn-margin\">禁用</button>").on("click", function () {
        E.switchHardcorePunishments();
      }));
    } else {
      $("#hardcorePunishments-button").append($("<button class=\"btn btn-danger btn-margin\">启用</button>").on("click", function () {
        E.switchHardcorePunishments();
      }));
    }
    if (B.isCommunityContentEnabled()) {
      $("#communityContent-button").append($("<button class=\"btn btn-success btn-margin disabled\">启用</button>").on("click", function () {}));
    } else {
      $("#communityContent-button").append($("<button class=\"btn btn-danger btn-margin\">禁用</button>").on("click", function () {}));
    }
  }
}
class G {
  static view() {
    G.LoadHtml();
    G.LoadData();
  }
  static LoadHtml() {
    $("main").html("\n        <div class=\"container text-center\" id=\"ranking-page-content\">\n        <br>\n        <div class=\"row\">\n            <div class=\"col\">\n                <form id='form-ranking'>\n                    Your name: <input name='ranking-name'/><br>\n                </form>\n                <p>Submit progress to leaderboard. (no personal data is sent)</p>\n                <p>\n                    Your score is based on completing the following: <br>\n                    Beginner Class- 4p, Intermediate class - 8p, Advanced class - 12p, Master class - 16p, Major - 160p\n                </p>\n                <div id=\"upload-progress-button\"></div>\n            </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"btn-margin\" id=\"ranking-buttons\"></div>\n            </div>\n        </div>\n        <hr>\n        <h4 class=\"bg-dark text-white\" id=\"ranking-title\">Ranking:</h4>\n        <div id=\"ranking-table\" class=\"table-responsive\"></div>\n    </div>");
  }
  static LoadData() {
    let t = $("#ranking-buttons");
    $("#upload-progress-button").append($("<button class=\"btn-success\">提交</button>").on("click", A.uploadProgressData.bind(this)));
    t.append($("<button type=\"button\" class=\"btn btn-primary btn-sm btn-margin\">All</button>").on("click", G.viewAll.bind(this)));
    let e = l.getMajorsData();
    for (let a in e) {
      let s = e[a];
      t.append($(`<button type="button" class="btn btn-secondary btn-sm btn-margin">${s.name}</button>`).on("click", G.viewByMajor.bind(this, s)));
    }
    G.viewAll();
  }
  static viewAll() {
    $.ajax({
      method: "GET",
      url: "https://baas.kinvey.com/appdata/kid_B1dZvbGC7/ranking",
      headers: {
        Authorization: "Basic a2lkX0IxZFp2YkdDNzo3NzFlZTdkMjU1YzE0OWJkOWE4YTBkMzc4ZTg3ZTU1Yw==",
        "X-Kinvey-API-Version": "3"
      }
    }).then(function (t) {
      $("#ranking-title").text("Ranking - All");
      $("#ranking-table").empty();
      let e = t.sort((t, e) => e.score - t.score);
      let a = $("<table class=\"table table-bordered\">");
      a.append($("<thead>").append($("<tr>").append($("<th scope=\"col\">").text("Name")).append($("<th scope=\"col\">").text("Major")).append($("<th scope=\"col\">").text("Majors")).append($("<th scope=\"col\">").text("Classes")).append($("<th scope=\"col\">").text("Punishments")).append($("<th scope=\"col\">").text("Score"))));
      let s = $("<tbody>");
      for (let t of e) {
        s.append($("<tr>").append($(`<td>${t.name}</td>`)).append($(`<td>${t.major}</td>`)).append($(`<td>${t.majors}</td>`)).append($(`<td>${t.classes}</td>`)).append($(`<td>${t.punishments}</td>`)).append($(`<td>${t.score}</td>`)));
      }
      a.append(s);
      $("#ranking-table").append(a);
    }).catch(m.handleAjaxError);
  }
  static viewByMajor(t) {
    let e = t.name;
    $.ajax({
      method: "GET",
      url: "https://baas.kinvey.com/appdata/kid_B1dZvbGC7/ranking",
      headers: {
        Authorization: "Basic a2lkX0IxZFp2YkdDNzo3NzFlZTdkMjU1YzE0OWJkOWE4YTBkMzc4ZTg3ZTU1Yw==",
        "X-Kinvey-API-Version": "3"
      }
    }).then(function (t) {
      $("#ranking-title").text(`Ranking - ${e}`);
      $("#ranking-table").empty();
      let a = t.sort((t, e) => e.score - t.score).filter(t => t.major == e);
      let s = $("<table class=\"table table-bordered\">");
      s.append($("<thead>").append($("<tr>").append($("<th scope=\"col\">").text("Name")).append($("<th scope=\"col\">").text("Major")).append($("<th scope=\"col\">").text("Majors")).append($("<th scope=\"col\">").text("Classes")).append($("<th scope=\"col\">").text("Punishments")).append($("<th scope=\"col\">").text("Score"))));
      let r = $("<tbody>");
      for (let t of a) {
        r.append($("<tr>").append($(`<td>${t.name}</td>`)).append($(`<td>${t.major}</td>`)).append($(`<td>${t.majors}</td>`)).append($(`<td>${t.classes}</td>`)).append($(`<td>${t.punishments}</td>`)).append($(`<td>${t.score}</td>`)));
      }
      s.append(r);
      $("#ranking-table").append(s);
    }).catch(m.handleAjaxError);
  }
}
class K {
  static view(t) {
    K.LoadHtml();
    K.LoadData();
  }
  static LoadHtml() {
    $("main").html("\n        <div class=\"container text-center\">\n        <h2>社团和姬友</h2>\n        <div class=\"card-container\">\n            <h3 class=\"bg-light hoverable\" data-toggle=\"collapse\" href=\"#partners-container\" role=\"button\" aria-expanded=\"true\"\n                aria-controls=\"partners-container\">姬友</h3>\n            <p>你最多可以有4个姬友。他们可以激活每天一次，第二天它们会去休息。</p>\n            <div id=\"partners-container\" class=\"row collapse show\"></div>\n\n            <h3 class=\"bg-warning hoverable\" data-toggle=\"collapse\" href=\"#normal-clubs-container\" role=\"button\"\n                aria-expanded=\"true\" aria-controls=\"normal-clubs-container\">社团</h3>\n            <p>你最多可以参加5个社团。社团的活动任务和奖励可以随时打开或关闭。</p>\n            <div id=\"normal-clubs-container\" class=\"row collapse show\"></div>\n\n            <h3 class=\"bg-danger hoverable\" data-toggle=\"collapse\" href=\"#elite-clubs-container\" role=\"button\"\n                aria-expanded=\"true\" aria-controls=\"elite-clubs-container\">精英社团</h3>\n            <p>解锁100学分，你可以加入 1 个精英社团，他们可以激活1天1次，并在第2天休息。</p>\n            <div id=\"elite-clubs-container\" class=\"row collapse show\"></div>\n        </div>\n    </div>");
  }
  static LoadData() {
    let t = p.getClubsData();
    let e = y.getPartnersData();
    let a = y.getActivePartners();
    let s = $("#partners-container");
    let r = $("#normal-clubs-container");
    let i = $("#elite-clubs-container");
    for (let t in e) {
      let r = e[t];
      if (r.community) {
        continue;
      }
      let i = $("<div class=\"col-auto\">");
      let o = $("<div class=\"card\" >");
      let l = d.getImage(r.id, "partner").url;
      let n = a.some(t => t == r.id);
      o.append($(`<img class="card-img-top hoverable" src="${l}.webp" onerror="this.onerror=null; this.src='${l}.jpg'" alt="${r.name}">`)).on("click", function () {
        let e = {
          entityType: "partner",
          entityId: t
        };
        dt.ViewPartner(e);
      });
      if (n) {
        o.append($("<div class=\"indicator-active\">姬友已激活</div>"));
      }
      o.append($("<h4 class=\"card-title\">").text(r.name).append($(`<h6>${r.name2}</h6>`)));
      s.append(i.append(o));
    }
    let o = p.getActiveClubs();
    for (let e in t) {
      let a = t[e];
      if (a.community) {
        continue;
      }
      let s = $("<div class=\"col-auto\">");
      let l = $("<div class=\"card\" >");
      let n = d.getImage(a.id, "club").url;
      let u = o.some(t => t == a.id);
      l.append($(`<img class="card-img-top hoverable" src="${n}.webp" onerror="this.onerror=null; this.src='${n}.jpg'" alt="${a.name}">`)).on("click", function () {
        let t = {
          entityType: "club",
          entityId: e
        };
        dt.ViewClub(t);
      });
      l.append($("<h4 class=\"card-title\">").text(a.name));
      if (a.tier > 1 && !A.unlockedEliteClubs()) {
        l.append($("<div class=\"indicator-locked\">未解锁！！精英社团100学分解锁！</div>"));
      } else if (u) {
        l.append($("<div class=\"indicator-active\">社团已激活</div>"));
      }
      if (a.tier == "1") {
        r.append(s.append(l));
      } else if (a.tier == "2") {
        i.append(s.append(l));
      }
    }
  }
}
class X {
  static view(t) {
    X.LoadHtml();
    X.LoadData();
  }
  static LoadHtml() {
    $("main").html("<div class=\"container text-center\">\n        <br>\n        <div id=\"punishments-buttons-container\"></div>\n        <br>\n        <h3 class=\"bg-warning hoverable\" data-toggle=\"collapse\"\n            href=\"#light-punishments-container\" role=\"button\" aria-expanded=\"true\"\n            aria-controls=\"light-punishments-container\">\n            轻型处分\n        </h3>\n        <p>逃课一节，你就会得到一个处分！</p>\n        <div id=\"light-punishments-container\" class=\"row collapse show\"></div>\n\n\n        <h3 class=\"bg-danger hoverable\" data-toggle=\"collapse\"\n            href=\"#heavy-punishments-container\" role=\"button\" aria-expanded=\"true\"\n            aria-controls=\"heavy-punishments-container\">\n            重型处分\n        </h3>\n        <p>当你达到100学分时自动解锁。</p>\n        <div id=\"heavy-punishments-container\" class=\"row collapse show\"></div>\n        \n        \n        <h3 class=\"bg-dark hoverable text-light\" data-toggle=\"collapse\"\n            href=\"#hardcore-punishments-container\" role=\"button\" aria-expanded=\"true\"\n            aria-controls=\"hardcore-punishments-container\">\n            极难处分\n        </h3>\n        <p>要求您有100学分，并从设置中开启。</p>\n        <div id=\"hardcore-punishments-container\" class=\"row collapse show\"></div>\n    </div>");
  }
  static LoadData() {
    $("#punishments-buttons-container").append($("<div class=\"btn-toolbar\">")).append($("<button class=\"btn btn-primary btn-margin\">随机一个处分</a>").on("click", function () {
      E.rollPunishment(1);
    })).append($("<button class=\"btn btn-warning btn-margin\">随机一个轻型处分</a>").on("click", function () {
      E.rollPunishmentLight();
    })).append($("<button class=\"btn btn-danger btn-margin\">随机一个重型处分</a>").on("click", function () {
      E.rollPunishmentHeavy();
    })).append($("<button class=\"btn btn-dark text-white btn-margin\">随机一个极难处分</a>").on("click", function () {
      E.rollPunishmentHardcore();
    }));
    let t = h.getPunishmentsData();
    let e = h.getCurrentPunishments();
    let a = $("#light-punishments-container");
    let s = $("#heavy-punishments-container");
    let r = $("#hardcore-punishments-container");
    for (let i in t) {
      let o = t[i];
      if (o.community) {
        continue;
      }
      let l = $("<div class=\"col-auto\">");
      let n = $("<div class=\"card\" >");
      let u = d.getImage(o.id, "punishment").url;
      let c = e.some(t => t == i);
      n.append($(`<img class="card-img-top hoverable" src="${u}.webp" onerror="this.onerror=null; this.src='${u}.jpg'" alt="${o.name}">`)).on("click", function () {
        let t = {
          entityType: "punishment",
          entityId: i
        };
        dt.ViewPunishment(t);
      });
      n.append($("<h5 class=\"card-title\">").text(o.name));
      if ((o.tier != 3 || A.unlockedHardPunishments() && h.IsUnlockedHardcorePunishments()) && (o.tier != 2 || A.unlockedHardPunishments())) {
        if (c) {
          n.append($("<div class=\"indicator-active\">惩罚已激活</div>"));
        }
      } else {
        n.append($("<div class=\"indicator-locked\">未解锁！！100学分解锁！</div>"));
      }
      if (o.tier == "1") {
        a.append(l.append(n));
      } else if (o.tier == "2") {
        s.append(l.append(n));
      } else if (o.tier == "3") {
        r.append(l.append(n));
      }
    }
  }
}
class Z {
  static view() {
    Z.LoadHtml();
    Z.LoadData();
  }
  static LoadHtml() {
    $("main").html("\n\n    <h4><a href=\"https://t.me/joinchat/KgaxIBaBZzMvhZtoHuOe_g\" target=\"_blank\">点击加入TeleGram聊天群</a></h4>\n        </div>");
  }
  static LoadData() {}
}
class Q {
  static view(t) {
    Q.LoadHtml();
    Q.LoadData(t);
  }
  static viewLegacy(t) {
    let e = {
      entityId: t.classId,
      entityType: "class"
    };
    history.replaceState("", "", "./");
    Q.LoadHtml();
    Q.LoadData(e);
  }
  static LoadHtml() {
    $("main").html("\n        <div class=\"container text-center\" id=\"object-container\"></div>");
  }
  static LoadData(t) {
    let e = t.entityId;
    let a = b.getTasksTimers().find(t => t.sourceId == e);
    let s = f.getClassesData();
    let i = s[e];
    let o = f.getCurrentClasses().find(t => t == e);
    let l = f.getCompletedClasses().find(t => t == e);
    let n = f.getAttendedClasses().find(t => t == e);
    let u = h.getActivePunishmentsNum() > 0;
    let c = f.getTodayClasses().find(t => t == e);
    let g = (i = x.entityFixTextNumbers(i)).days.split(" ").filter(t => t);
    let m = r.weekdays();
    let p = [];
    g.forEach(function (t) {
      p.push(m[t]);
    });
    let y = p.join(", ");
    let w = i.prerequisites.split(" ").filter(t => t);
    let U = $("<h5>").text("先修科目: 无");
    if (w.length > 0) {
      U.text("先修科目:  ");
      for (let t of w) {
        let e = s[t];
        let a = $("<a class=\"text-primary\">").text(`${e.name}, `).on("click", function () {
          let e = {
            entityId: t,
            entityType: "class"
          };
          dt.ViewClass(e);
        });
        U.append(a);
      }
    }
    let v = $("#object-container");
    let k = d.getImage(i.id, "class").url;
    v.append($(`<img class="img-fluid viewObject-img hoverable" src="${k}.webp" onerror="this.onerror=null; this.src='${k}.jpg'" alt="${i.name}">`).on("click", function () {
      dt.RefreshView();
    }));
    v.append($("<h2>").text(i.name)).append($("<h5>").text("上课日期:  " + y)).append($("<h5>").append(U)).append($("<p>").text(i.description));
    v.append($("<hr>")).append($("<h5>日常任务选项</h5>")).append($("<p>").append($("<b>").text("选项 1: ")).append($("<span>").text(i.daily1))).append($("<p>").append($("<b>").text("选项 2: ")).append($("<span>").text(i.daily2)));
    if (c) {
      if (a) {
        v.append($("<button class=\"btn btn-dark\">这个课程有一个正在运行的任务/计时器。</button>").on("click", function () {
          let t = {
            entityId: e,
            entityType: "class",
            entityOption: a.sourceOption
          };
          dt.ViewTask(t);
        }));
      } else if (o) {
        v.append($("<button class=\"btn btn-success btn-margin\">选项 1</button>").on("click", function () {
          let t = {
            entityId: e,
            entityType: "class",
            entityOption: "daily1"
          };
          dt.ViewTask(t);
        })).append($("<button class=\"btn btn-success btn-margin\">选项 2)</button>").on("click", function () {
          let t = {
            entityId: e,
            entityType: "class",
            entityOption: "daily2"
          };
          dt.ViewTask(t);
        }));
      }
    } else {
      v.append($("<h6>今天没有这门课</h6>"));
    }
    v.append($("<hr>")).append($("<h5>考试选项</h5>")).append($("<p>").append($("<b>").text("选项 1: ")).append($("<span>").text(i.exam1))).append($("<p>").append($("<b>").text("选项 2: ")).append($("<span>").text(i.exam2)));
    if (c) {
      if (a) {
        v.append($("<button class=\"btn btn-dark\">这个课程有一个正在运行的任务/计时器。</button>").on("click", function () {
          let t = {
            entityId: e,
            entityType: "class",
            entityOption: a.sourceOption
          };
          dt.ViewTask(t);
        }));
      } else if (u) {
        v.append($("<h6>你要先完成你的处分来解锁考试。</h6>"));
      } else if (n) {
        if (o) {
          v.append($("<button class=\"btn btn-success btn-margin\">考试 1</button>").on("click", function () {
            let t = {
              entityId: e,
              entityType: "class",
              entityOption: "exam1"
            };
            dt.ViewTask(t);
          })).append($("<button class=\"btn btn-success btn-margin\">考试 2</button>").on("click", function () {
            let t = {
              entityId: e,
              entityType: "class",
              entityOption: "exam2"
            };
            dt.ViewTask(t);
          }));
        }
      } else {
        v.append($("<h6>至少参加一次课程来解锁考试。</h6>"));
      }
    } else {
      v.append($("<h6>今天没有这门课。</h6>"));
    }
    v.append($("<hr>"));
    if (o) {
      v.append($("<button class=\"btn btn-danger\">Drop class</button>").on("click", P.leaveClass.bind(this, i.id)));
    } else if (l) {
      v.append($("<button class=\"btn btn-primary\">完成</button>"));
    } else {
      v.append($("<button class=\"btn btn-success\">选择此课程</button>").on("click", P.joinClass.bind(this, i.id)));
    }
    v.append($("<hr>"));
    v.append($("<small class=\"text-sm-center\">这里没有应用任何补充说明。</small>"));
  }
}
class tt {
  static view(t) {
    tt.LoadHtml();
    tt.LoadData(t);
  }
  static LoadHtml() {
    $("main").html("<div id=\"object-container\" class=\"container text-center\">\n    </div>");
  }
  static LoadData(t) {
    let e = t.entityId;
    let a = y.getPartnersData();
    let s = y.getActivePartners();
    let r = a[e];
    let i = $("#object-container");
    let o = d.getImage(e, "partner").url;
    i.append($("<div class=\"row\">").append($("<div class=\"col\">").append($(`<img class="img-fluid viewObject-img hoverable" src="${o}.webp" onerror="this.onerror=null; this.src='${o}.jpg'" alt="${r.name}">`).on("click", function () {
      dt.RefreshView();
    })))).append($("<div class=\"row\">").append($("<div class=\"col text-center\">").append($("<h2>").text(r.name)).append($("<h5>").text(r.name2)).append($("<p>").text(r.description)))).append($("<div class=\"row\">").append($("<div class=\"col\">").append($("<h6>").text("奖励:")).append($("<p>").append($("<b>").text("奖励 1: ")).append($("<span>").text(r.perk1))).append($("<p>").append($("<b>").text("奖励 2: ")).append($("<span>").text(r.perk2)))).append($("<div class=\"col\">").append($("<h6>").text("社团活动任务:")).append($("<p>").append($("<b>").text("社团任务 1: ")).append($("<span>").text(r.job1))).append($("<p>").append($("<b>").text("社团任务 2: ")).append($("<span>").text(r.job2)))));
    if (s.includes(e)) {
      i.append($("<div class=\"row\">").append($("<div class=\"col\">").append($("<button class=\"btn btn-danger\">退出社团</a>").on("click", function () {
        N.kickPartner(e);
      }))));
    } else {
      i.append($("<div class=\"row\">").append($("<div class=\"col\">").append($("<button class=\"btn btn-success\">加入</a>").on("click", function () {
        N.invitePartner(e);
      }))));
    }
  }
}
class et {
  static view(t) {
    et.LoadHtml();
    et.LoadData(t);
  }
  static LoadHtml() {
    $("main").html("\n        <div id=\"object-container\" class=\"container text-center\">\n    </div>");
  }
  static LoadData(t) {
    let e = t.entityId;
    let a = b.getTasksTimers().find(t => t.sourceId == e && t.sourceType == "major");
    if (a) {
      let t = {
        entityId: e,
        entityType: "major",
        entityOption: a.sourceOption
      };
      dt.ViewTask(t);
      return;
    }
    let s = l.getMajorsData()[e];
    s = x.entityFixTextNumbers(s);
    let r = f.getClassesData();
    let i = s.prerequisites.split(" ").filter(t => t);
    let o = $("<h5>").text("先修科目：无");
    if (i.length > 0) {
      o.text("先修科目： ");
      for (let t of i) {
        let e = r[t];
        let a = $("<a class=\"text-primary\">").text(`${e.name}, `).on("click", function () {
          let e = {
            entityId: t,
            entityType: "class"
          };
          dt.ViewClass(e);
        });
        o.append(a);
      }
    }
    let n = $("#object-container");
    let u = d.getImage(e, "major").url;
    n.append($(`<img class="img-fluid viewObject-img hoverable" src="${u}.webp" onerror="this.onerror=null; this.src='${u}.jpg'" alt="${s.name}">`).on("click", function () {
      dt.RefreshView();
    })).append($("<h2>").text(s.name)).append($("<h5>").append(o)).append($("<p>").text(s.description));
    n.append($("<hr>")).append($("<h5>专业毕业考:</h5>")).append($("<p>").append($("<b>").text("专业考试 1: ")).append($("<span>").text(s.exam1))).append($("<p>").append($("<b>").text("专业考试 2: ")).append($("<span>").text(s.exam2))).append($("<p>").append($("<b>").text("专业考试 3: ")).append($("<span>").text(s.exam3)));
    if (t.unlocked) {
      n.append($("<hr>")).append($("<button class=\"btn btn-success btn-margin\">专业考试  1</button>").on("click", function () {
        let t = {
          entityId: s.id,
          entityType: "major",
          entityOption: "exam1"
        };
        dt.ViewTask(t);
      })).append($("<button class=\"btn btn-success btn-margin\">专业考试  2</button>").on("click", function () {
        let t = {
          entityId: s.id,
          entityType: "major",
          entityOption: "exam2"
        };
        dt.ViewTask(t);
      })).append($("<button class=\"btn btn-success btn-margin\">专业考试  3</button>").on("click", function () {
        let t = {
          entityId: s.id,
          entityType: "major",
          entityOption: "exam3"
        };
        dt.ViewTask(t);
      })).append($("<hr>"));
    }
    let c = l.getCurrentMajor();
    if (l.getCompletedMajors().find(t => t == e)) {
      n.append($("<button class=\"btn btn-primary\">Completed</button>"));
    } else if (c) {
      if (c.id == e) {
        n.append($("<button href=\"\" class=\"btn btn-danger\">专业退选</button>").on("click", function () {
          F.dropMajor(e);
        }));
      } else if (c.id != e) {
        n.append($("<button class=\"btn btn-secondary\">你已经加入了另一个专业。</button>"));
      }
    } else {
      n.append($("<button class=\"btn btn-success\">选择此专业</button>").on("click", function () {
        F.signMajor(e);
      }));
    }
  }
}
class at {
  static view(t) {
    at.LoadHtml();
    at.LoadData(t);
  }
  static LoadHtml() {
    $("main").html("<div id=\"object-container\" class=\"container text-center\">\n    </div>");
  }
  static LoadData(t) {
    let e = p.getClubsData();
    let a = p.getActiveClubs();
    let s = t.entityId;
    let r = e[s];
    let i = $("#object-container");
    let o = d.getImage(r.id, "club").url;
    i.append($("<div class=\"row\">").append($("<div class=\"col\">").append($(`<img class="img-fluid viewObject-img hoverable" src="${o}.webp" onerror="this.onerror=null; this.src='${o}.jpg'" alt="${r.name}">">`).on("click", function () {
      dt.RefreshView();
    })))).append($("<div class=\"row\">").append($("<div class=\"col text-center\">").append($("<h2>").text(r.name)).append($("<p>").text(r.description)))).append($("<div class=\"row\">").append($("<div class=\"col\">").append($("<h6>").text("社团奖励:")).append($("<p>").append($("<b>").text("奖励 1: ")).append($("<span>").text(r.perk1))).append($("<p>").append($("<b>").text("奖励 2: ")).append($("<span>").text(r.perk2)))).append($("<div class=\"col\">").append($("<h6>").text("社团奖励任务:")).append($("<p>").append($("<b>").text("社团任务 1: ")).append($("<span>").text(r.job1))).append($("<p>").append($("<b>").text("社团任务 2: ")).append($("<span>").text(r.job2)))));
    if (a.includes(s)) {
      i.append($("<div class=\"row\">").append($("<div class=\"col\">").append($("<button class=\"btn btn-danger\">离开</a>").on("click", I.leaveClub.bind(this, r)))));
    } else {
      i.append($("<div class=\"row\">").append($("<div class=\"col\">").append($("<button class=\"btn btn-success\">加入社团</button>").on("click", I.joinClub.bind(this, r.id)))));
    }
  }
}
class st {
  static view(t) {
    st.LoadHtml();
    st.LoadData(t);
  }
  static LoadHtml() {
    $("main").html("<div id=\"object-container\" class=\"container text-center\">\n    </div>");
  }
  static LoadData(t) {
    let e = h.getPunishmentsData()[t.entityId];
    console.log(e);
    e = x.entityFixTextNumbers(e);
    let a = $("#object-container");
    let s = d.getImage(e.id, "punishment").url;
    a.append($("<div class=\"row\">").append($("<div class=\"col\">").append($(`<img class="img-fluid viewObject-img hoverable" src="${s}.webp" onerror="this.onerror=null; this.src='${s}.jpg'" alt="${e.name}">`).on("click", function () {
      dt.RefreshView();
    })))).append($("<div class=\"row\">").append($("<div class=\"col text-center\">").append($("<h2>").text(e.name)).append($("<h5>").text(e.description))));
  }
}
class rt {
  constructor(t, e, a, s, r, i, o) {
    this.sourceId = t;
    this.sourceType = e;
    this.sourceOption = a;
    this.description = s;
    this.extraCredits = o;
    this.startTime = Date.now();
    this.currentTime = r;
    this.endTime = this.currentTime + i;
    this.isPaused = false;
    this.pauseStart = null;
    this.pauseEnd = null;
    this.isEnded = false;
  }
}
class it {
  static getCareersData() {
    return null;
  }
  static setCareersData() {
    return null;
  }
}
class ot {
  static view(t) {
    ot.LoadHtml();
    ot.LoadData(t);
  }
  static LoadHtml() {
    $("main").html("\n        <div class=\"container\">\n        <div class=\"text-center\" id=\"object-container\"></div>\n        <div class=\"text-center\" id=\"task-buttons\"></div>\n    </div>\n    <audio id=\"audio\" src=\"sounds/horn.wav\" type=\"audio/wav\" preload=\"auto\"></audio>\n        ");
  }
  static LoadData(t) {
    let e;
    let a;
    let r = $("#object-container");
    switch (t.entityType) {
      case "major":
        e = d.getImage(t.entityId, "major");
        a = l.getMajorsData();
        break;
      case "class":
        e = d.getImage(t.entityId, "class");
        a = f.getClassesData();
        break;
      case "club":
        e = d.getImage(t.entityId, "club");
        a = p.getClubsData();
        break;
      case "punishment":
        e = d.getImage(t.entityId, "punishment");
        a = h.getPunishmentsData();
        break;
      case "career":
        e = d.getImage(t.entityId, "career");
        a = it.getCareersData();
        break;
      default:
        alert("出问题了，见控制台。");
        return;
    }
    let i = e.url;
    let o = a[t.entityId];
    r.append($(`<img class="img-fluid viewObject-img" src="${i}.webp" onerror="this.onerror=null; this.src='${i}.jpg'">`));
    r.append($("<h2>").text(o.name));
    let n = o[t.entityOption];
    let u = x.applyMultipliersToText(n, o.tags);
    r.append($(`<h6 id="object-description">${u}</h6>`));
    let c = x.textToMilliseconds(n);
    if (t.entityType != "major") {
      c = x.applyMultipliersToDuration(c, o.tags);
    }
    let g = Y.calculateTaskBonusPoints(o.tags);
    r.append($("<div class=\"panel panel-default\">").append($("<div class=\"panel-body\">").append($(`<div class="lead text-center" id="timer">总持续时间: ${x.dateObjectToHumanTime(c)}</div>`)))).append($("<br>"));
    let m = $("#task-buttons");
    let y = b.getTasksTimers().find(e => e.sourceId == t.entityId);
    function w(e) {
      m.empty();
      m.append($("<button class=\"btn btn-warning btn-margin\">暂停</button>").on("click", Y.pauseTask.bind(this, e)));
      m.append($("<button class=\"btn btn-success btn-margin\">恢复</button>").on("click", Y.resumeTask.bind(this, e)));
      m.append($("<button class=\"btn btn-dark btn-margin\">惩罚</button>").on("click", Y.punishTask.bind(this, e)));
      m.append($("<button class=\"btn btn-danger btn-margin\">失败</button>").on("click", Y.failTask.bind(this, e)));
      m.append($("<hr>"));
      if (l.isFinalThesisInProgress()) {
        m.append($("<button class=\"btn btn-dark btn-margin\">在你的考试完成之前，你是不允许浏览其他页面！！</button>").on("click", function () {}));
      } else {
        m.append($("<button class=\"btn btn-primary btn-margin\">前往课程表</button>").on("click", function () {
          dt.ViewSchedule();
        }));
      }
      $("#object-description").text(e.description);
      let a = `timer${e.sourceId}`;
      $("#timer").attr("id", a);
      let i = setInterval(function () {
        if (!(e = b.getTasksTimers().find(e => e.sourceId == t.entityId))) {
          document.getElementById("audio");
          m.empty();
          if (t.entityType == "major") {
            m.append($("<button class=\"btn btn-primary\">专业考试完成</button>").on("click", function () {
              dt.ViewEndgame();
            }));
          } else if (t.entityType == "class") {
            m.append($("<button class=\"btn btn-primary\">任务完成</button>").on("click", function () {
              dt.ViewSchedule();
            }));
          }
          clearInterval(i);
          return;
        }
        let s = e.endTime - e.currentTime;
        let r = x.dateObjectToHumanTime(s);
        if (e.isEnded) {
          document.getElementById("audio");
          m.empty();
          if (e.sourceType == "major") {
            m.append($("<button class=\"btn btn-primary\">专业考试完成</button>").on("click", function () {
              dt.ViewEndgame();
            }));
          } else {
            m.append($("<button class=\"btn btn-primary\">任务完成</button>").on("click", function () {
              dt.ViewSchedule();
            }));
          }
          clearInterval(i);
        } else if (e.isPaused) {
          $("#timer").text(`${r} - PAUSED`);
        } else {
          $(`#${a}`).text(r);
        }
      }, s.TICK_RATE_FAST);
      if (i.sourceType == "major") {
        let t = h.getCurrentPunishments();
        for (let e of t) {
          let t = d.getImage(e.id, "punishment").url;
          e = x.entityApplyMultipliersToText(e);
          let a = $("<div class=\"object-info border border-dark bg-light\">");
          let s = $("<div class=\"col col-4\">");
          let i = $("<div class=\"col col-7\">");
          s.append($(`<img class="card-img-top img-fluid" src="${t}.webp" onerror="this.onerror=null; this.src='${t}.jpg'">`));
          i.append($(`<h6 class="text-center">${e.name}</h6>`)).append($("<p class=\"text-left\">").text(e.description)).append($("<div class=\"btn-group\">").append($("<button class=\"btn btn-success btn-sm\">完成</button>").on("click", E.completePunishment.bind(this, e))).append($("<button class=\"btn btn-warning btn-sm\">重新随机</button>").on("click", E.rerollPunishment.bind(this, e))));
          a.append($("<div class=\"row\">").append(s).append(i));
          r.append(a);
        }
      }
    }
    if (y) {
      w(y);
    } else if (c == 0) {
      m.append($("<button class=\"btn btn-success btn-lg btn-margin\">完成</button>").on("click", function () {
        let e = new rt(o.id, t.entityType, t.entityOption, u, Date.now(), c, g);
        b.addTaskTimer(e);
        if (e.sourceType == "major") {
          l.setFinalThesisInProgress(true);
        }
        w(e);
      }));
      m.append($("<button class=\"btn btn-danger btn-lg btn-margin\">失败</button>").on("click", function () {
        let e = new rt(o.id, t.entityType, t.entityOption, u, Date.now(), c);
        b.addTaskTimer(e);
        if (e.sourceType == "major") {
          l.setFinalThesisInProgress(true);
        }
        console.log("FAIL");
        Y.failTask(o.id, t.entityType, t.entityOption);
      }));
    } else {
      m.append($("<button class=\"btn btn-primary btn-lg\">开始</button>").on("click", function () {
        let e = new rt(o.id, t.entityType, t.entityOption, u, Date.now(), c, g);
        b.addTaskTimer(e);
        if (e.sourceType == "major") {
          l.setFinalThesisInProgress(true);
        }
        w(e);
      }));
    }
  }
}
class lt {
  static setView(t) {
    localStorage.setItem("view", JSON.stringify(t));
  }
  static getView() {
    return JSON.parse(localStorage.getItem("view"));
  }
}
class nt {
  static view(t) {
    nt.LoadHtml();
    nt.LoadData(t);
  }
  static LoadHtml() {
    $("main").html("\n        <div class=\"container text-center\" id=\"object-container\">\n    </div><br>\n    <div class=\"donate text-center\">\n    </div>");
  }
  static LoadData(t) {
    localStorage.setItem("graduated", JSON.stringify(true));
    let e = l.getCurrentMajor();
    let a = f.getCompletedClasses();
    let s = h.getPunishmentsDoneNum();
    let r = $("#object-container");
    let i = `祝贺你，你终于从大学毕业了!这是一个漫长的旅程，我们希望你喜欢它! 您已经完成了 ${a.length} 个课程和忍受了 ${s}次处分。${e.name}已添加到您已完成的专业列表中。你可以选择另一个专业，以进一步增加你未来的职业前景。不要忘记导出您的保存文件并将您的进度提交到排行榜! \n            \n            大学也将感谢你们游玩，因为你们的游玩能帮助的运行和帮助它的发展。\n            \n            愿你在未来的道路上继续取得成功!\n            \n            此致\n            抖喵酱\n            `;
    r.append($("<img class=\"img-fluid viewObject-img\" src=\"img/graduation.jpg\">"));
    r.append($("<h4>").text(i));
    r.append($("<button class=\"btn btn-success\">恭喜你！</button>").on("click", function () {
      console.log("click");
      F.completeFinalThesis();
    }));
  }
}
class ut {
  static view(t) {
    ut.LoadHtml();
    ut.LoadData();
  }
  static LoadHtml() {
    $("main").html("\n        <div class=\"container text-center\">\n        <h1 class=\"text text-center\">社群内容</h1>\n        <h6>社群内容是由社群制作的不属于官方游戏的附加内容。</h6>\n        <h6>加入右下角聊天室或者TG聊天群! <a href=\"https://t.me/joinchat/KgaxIBaBZzMvhZtoHuOe_g\">https://t.me/joinchat/KgaxIBaBZzMvhZtoHuOe_g</a> </h6>\n        <div class=\"card-container\">\n            <h3 class=\"bg-dark text-white\" data-toggle=\"collapse\"\n                href=\"#community-clubs-container\" role=\"button\" aria-expanded=\"true\"\n                aria-controls=\"community-clubs-container\">\n                社团和姬友:\n            </h3>\n            <div id=\"community-clubs-container\" class=\"row partners-container collapse show\"></div>\n\n\n            <h3 class=\"bg-dark text-white\" data-toggle=\"collapse\"\n                href=\"#community-classes-container\" role=\"button\" aria-expanded=\"true\"\n                aria-controls=\"community-classes-container\">\n                课程：\n            </h3>\n            <div id=\"community-classes-container\" class=\"row community-classes-container collapse show\"></div>\n\n\n            <h3 class=\"bg-dark text-white\" data-toggle=\"collapse\"\n                href=\"#community-punishments-container\" role=\"button\" aria-expanded=\"true\"\n                aria-controls=\"community-punishments-container\">\n                处分：\n            </h3>\n            <div id=\"community-punishments-container\" class=\"row community-punishments-container collapse show\"></div>\n\n\n            <h3 class=\"bg-dark text-white\" data-toggle=\"collapse\"\n                href=\"#community-majors-container\" role=\"button\" aria-expanded=\"true\"\n                aria-controls=\"community-majors-container\">\n                专业：\n            </h3>\n            <div id=\"community-majors-container\" class=\"row partners-container collapse show\">\n            </div>\n        </div>\n    </div>");
  }
  static LoadData() {
    (function () {
      let t = p.getClubsData();
      let e = y.getPartnersData();
      let a = $("#community-clubs-container");
      let s = $("#community-clubs-container");
      let r = $("#community-clubs-container");
      let i = y.getActivePartners();
      for (let t in e) {
        let s = e[t];
        if (s.community == 1) {
          let e = $("<div class=\"col-auto\">");
          let r = $("<div class=\"card\" >");
          let o = d.getImage(s.id, "partner");
          let l = o.url;
          let n = i.some(t => t == s.id);
          r.append($(`<img class="card-img-top hoverable" src="${l}.webp" onerror="this.onerror=null; this.src='${l}.jpg'" alt="${s.name}">`)).on("click", function () {
            let e = {
              entityType: "partner",
              entityId: t
            };
            dt.ViewPartner(e);
          });
          if (n) {
            r.append($("<div class=\"indicator-active\">已激活</div>"));
          }
          r.append($("<h4 class=\"card-title\">").text(s.name).append($(`<h6>${s.name2}</h6>`)));
          a.append(e.append(r));
        }
      }
      let o = p.getActiveClubs();
      for (let e in t) {
        let a = t[e];
        if (a.community == 1) {
          let t = $("<div class=\"col-auto\">");
          let i = $("<div class=\"card\" >");
          let l = d.getImage(a.id, "club");
          let n = l.url;
          let u = o.some(t => t == a.id);
          i.append($(`<img class="card-img-top hoverable" src="${n}.webp" onerror="this.onerror=null; this.src='${n}.jpg'" alt="${a.name}">`)).on("click", function () {
            let t = {
              entityType: "club",
              entityId: e
            };
            dt.ViewClub(t);
          });
          i.append($("<h4 class=\"card-title\">").text(a.name));
          if (a.tier > 1 && !A.unlockedEliteClubs()) {
            i.append($("<div class=\"indicator-locked\">未解锁</div>"));
          }
          if (u) {
            i.append($("<div class=\"indicator-active\">已激活</div>"));
          }
          if (a.tier == "1") {
            s.append(t.append(i));
          } else if (a.tier == "2") {
            r.append(t.append(i));
          }
        }
      }
    })();
    (function () {
      let t = f.getClassesData();
      let e = f.getCompletedClasses();
      let a = f.getCurrentClasses();
      for (let i in t) {
        let o = t[i];
        if (o.community == 1) {
          let t = false;
          let l = o.prerequisites.split(" ").filter(t => t);
          for (let a of l) {
            let s = e.find(t => t == a);
            if (!s) {
              t = true;
            }
          }
          if (o.tier == "intermediate" && Number(r.currentCredits()) < s.REQUIRED_CREDITS_UNLOCK_INTERMEDIATE) {
            t = true;
          } else if (o.tier == "advanced" && Number(r.currentCredits()) < s.REQUIRED_CREDITS_UNLOCK_ADVANCED) {
            t = true;
          } else if (o.tier == "master" && Number(r.currentCredits()) < s.REQUIRED_CREDITS_UNLOCK_MASTER) {
            t = true;
          }
          let n = e.some(t => t == i);
          let u = a.some(t => t == i);
          let c = $("<div class=\"col-auto\">");
          let h = d.getImage(o.id, "class");
          let g = h.url;
          let m = $("<div class=\"card border-secondary\" >");
          m.append($(`<img class="card-img-top hoverable" src="${g}.webp" onerror="this.onerror=null; this.src='${g}.jpg'" alt="${o.name}">`)).on("click", function () {
            let t = {
              entityType: "class",
              entityId: i
            };
            dt.ViewClass(t);
          }).append($("<h4 class=\"card-title\">").text(o.name).append($(`<h6>${o.name2}</h6>`)));
          if (t) {
            m.append($("<div class=\"indicator-locked\">未解锁</div>"));
          } else if (n) {
            m.append($("<div class=\"indicator-complete\">已完成</div>"));
          } else if (u) {
            m.append($("<div class=\"indicator-active\">已激活</div>"));
          }
          $("#community-classes-container").append(c.append(m));
        }
      }
    })();
  }
}
class dt {
  static scrollToTop() {
    window.scrollTo(0, 0);
  }
  static relaodNavbar() {
    ct.load();
  }
  static ViewIndex(t, e = 0) {
    lt.setView("index");
    window.scrollTo(0, e);
    dt.relaodNavbar();
    i.view(t);
  }
  static ViewMajors(t, e = 0) {
    if (l.isFinalThesisInProgress()) {
      dt.RedirectToFinalThesis();
    } else {
      lt.setView("majors");
      window.scrollTo(0, e);
      dt.relaodNavbar();
      c.view(t);
    }
  }
  static ViewClasses(t, e = 0) {
    if (l.isFinalThesisInProgress()) {
      dt.RedirectToFinalThesis();
    } else {
      lt.setView("classes");
      window.scrollTo(0, e);
      dt.relaodNavbar();
      w.view(t);
    }
  }
  static ViewClubs(t, e = 0) {
    if (l.isFinalThesisInProgress()) {
      dt.RedirectToFinalThesis();
    } else {
      lt.setView("clubs");
      window.scrollTo(0, e);
      dt.relaodNavbar();
      K.view(t);
    }
  }
  static ViewPunishments(t, e = 0) {
    if (l.isFinalThesisInProgress()) {
      dt.RedirectToFinalThesis();
    } else {
      lt.setView("punishments");
      window.scrollTo(0, e);
      dt.relaodNavbar();
      X.view(t);
    }
  }
  static ViewSchedule(t, e = 0) {
    if (l.isFinalThesisInProgress()) {
      dt.RedirectToFinalThesis();
    } else {
      lt.setView("schedule");
      window.scrollTo(0, e);
      dt.relaodNavbar();
      _.view(t);
    }
  }
  static ViewProgress(t, e = 0) {
    if (l.isFinalThesisInProgress()) {
      dt.RedirectToFinalThesis();
    } else {
      lt.setView("progress");
      window.scrollTo(0, e);
      dt.relaodNavbar();
      H.view(t);
    }
  }
  static ViewInfo(t, e = 0) {
    lt.setView("info");
    window.scrollTo(0, e);
    dt.relaodNavbar();
    W.view(t);
  }
  static ViewSettings(t, e = 0) {
    lt.setView("settings");
    window.scrollTo(0, e);
    dt.relaodNavbar();
    J.view(t);
  }
  static ViewRanking(t, e = 0) {
    lt.setView("ranking");
    window.scrollTo(0, e);
    dt.relaodNavbar();
    G.view(t);
  }
  static ViewChat(t, e = 0) {
    lt.setView("chat");
    window.scrollTo(0, e);
    dt.relaodNavbar();
    Z.view(t);
  }
  static ViewCommunity(t, e = 0) {
    lt.setView("community");
    window.scrollTo(0, e);
    dt.relaodNavbar();
    ut.view(t);
  }
  static ViewMajor(t, e = 0) {
    window.scrollTo(0, e);
    dt.relaodNavbar();
    et.view(t);
  }
  static ViewClass(t, e = 0) {
    window.scrollTo(0, e);
    dt.relaodNavbar();
    Q.view(t);
  }
  static ViewPartner(t, e = 0) {
    window.scrollTo(0, e);
    dt.relaodNavbar();
    tt.view(t);
  }
  static ViewClub(t, e = 0) {
    window.scrollTo(0, e);
    dt.relaodNavbar();
    at.view(t);
  }
  static ViewPunishment(t, e = 0) {
    window.scrollTo(0, e);
    dt.relaodNavbar();
    st.view(t);
  }
  static ViewTask(t, e = 0) {
    window.scrollTo(0, e);
    dt.relaodNavbar();
    ot.view(t);
  }
  static RedirectToFinalThesis(t = 0) {
    window.scrollTo(0, t);
    dt.relaodNavbar();
    if (JSON.parse(localStorage.getItem("graduated")) == 1) {
      nt.view();
      return;
    }
    let e = {
      entityType: "major",
      entityId: l.getCurrentMajorId(),
      unlocked: true
    };
    dt.ViewMajor(e);
  }
  static ViewEndgame(t, e = 0) {
    lt.setView("endgame");
    window.scrollTo(0, e);
    dt.relaodNavbar();
    nt.view(t);
  }
  static RefreshView(t) {
    let e = window.scrollY;
    ct.load();
    switch (lt.getView()) {
      case "index":
        dt.ViewIndex(t, e);
        break;
      case "majors":
        dt.ViewMajors(t, e);
        break;
      case "classes":
        dt.ViewClasses(t, e);
        break;
      case "clubs":
        dt.ViewClubs(t, e);
        break;
      case "punishments":
        dt.ViewPunishments(t, e);
        break;
      case "schedule":
        dt.ViewSchedule(t, e);
        break;
      case "progress":
        dt.ViewProgress(t, e);
        break;
      case "info":
        dt.ViewInfo(t, e);
        break;
      case "ranking":
        dt.ViewRanking(t, e);
        break;
      case "community":
        dt.ViewCommunity(t, e);
        break;
      case "chat":
        dt.ViewChat(t, e);
        break;
      case "settings":
        dt.ViewSettings(t, e);
        break;
      case "endgame":
        dt.ViewEndgame(t, e);
    }
  }
}
class ct {
  static load() {
    let t = $("#loadNavbar");
    t.empty();
    t.append($("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">").append($("<nav class=\"navbar navbar-light bg-light\">").append($("<a class=\"navbar-brand\">").append($("<img src=\"img/logo.png\" style=\"max-height: 30px\" class=\"d-inline-block align-top\" alt=\"\">")).on("click", function () {
      dt.RefreshView();
    }))).append($("<nav class=\"navbar navbar-light bg-light\">").append($("<a class=\"nav-item\">").text("学分: " + r.currentCredits() + "/" + r.requiredCredits()))).append($("<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">").append($("<span class=\"navbar-toggler-icon\">"))).append($("<div class=\"collapse navbar-collapse\" id=\"navbarNav\">").append($("<ul class=\"navbar-nav\">").append($("<li class=\"nav-item\">").append($("<a class=\"nav-link\">主页<span class=\"sr-only\"></span></a>").on("click", function () {
      dt.ViewIndex();
    }))).append($("<li class=\"nav-item\">").append($("<a class=\"nav-link\">专业</a>").on("click", function () {
      dt.ViewMajors();
    }))).append($("<li class=\"nav-item\">").append($("<a class=\"nav-link\">课程</a>").on("click", function () {
      dt.ViewClasses();
    }))).append($("<li class=\"nav-item\">").append($("<a class=\"nav-link\">社团/姬友</a>").on("click", function () {
      dt.ViewClubs();
    }))).append($("<li class=\"nav-item\">").append($("<a class=\"nav-link\">处分</a>").on("click", function () {
      dt.ViewPunishments();
    }))).append($("<li class=\"nav-item\">").append($("<a class=\"nav-link\">课程表</a>").on("click", function () {
      dt.ViewSchedule();
    }))).append($("<li class=\"nav-item\">").append($("<a class=\"nav-link\">进度</a>").on("click", function () {
      dt.ViewProgress();
    }))).append($("<li class=\"nav-item\">").append($("<a class=\"nav-link\">帮助/校规</a>").on("click", function () {
      dt.ViewInfo();
    }))).append($("<li class=\"nav-item\">").append($("<a class=\"nav-link\">社群</a>").on("click", function () {
      dt.ViewCommunity();
    }))).append($("<li class=\"nav-item\">").append($("<a class=\"nav-link\" id=\"btn-viewSettings\">设置</a>").on("click", function () {
      dt.ViewSettings();
    }))))));
    if (JSON.parse(localStorage.getItem("debug")) == 1) {
      $(".navbar-nav").append($("<li class=\"nav-item\">").append($("<button class=\"nav-link btn btn-primary\">PassDay</button>").on("click", function () {
        T.passDay();
      })));
    }
  }
}
window.onload = function () {
  try {
    if (localStorage.getItem("firstRun") == null) {
      O.seedData();
    }
    if (M.getGameVersion() != s.CURRENT_VERSION) {
      console.log("updating game");
      D.updateGame();
    }
    ct.load();
    (class {
      static load() {
        $("footer").append($("<div class=\"footer-container text-center\" style=\"height: 200px\">").append($("\n         <div class=\"donate\">\n            <form action=\"https://afdian.net/@doumiaojiang\" method=\"post\" target=\"_top\">\n                <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\" />\n                <input type=\"hidden\" name=\"hosted_button_id\" value=\"ELWBWSLCDAAU8\" />\n                <input type=\"image\" src=\"./img/paypal-banner.png\" border=\"0\" name=\"submit\" title=\"爱发电 - 将创作的自由，还给创作者!\" alt=\"抖喵酱爱发电链接\" />\n            </form>\n        </div>`)")).append($("<a class=\"footer-img\" href=\"https://shop575649948.m.taobao.com\">").append($("<img src=\"./img/patreon-banner.jpg\"  alt=\"抖喵家淘宝店\">"))));
      }
    }).load();
    Y.runGlobalTimer();
    let t;
    let e = window.location.href;
    let a = x.urlToObject(e);
    switch (a.htmlFile) {
      case "":
        dt.RefreshView();
        break;
      case "index.html":
        dt.ViewIndex(a);
        break;
      case "majors.html":
        history.pushState(null, "", "./");
        dt.ViewMajors(a);
        break;
      case "classes.html":
        history.pushState(null, "", "./");
        dt.ViewClasses(a);
        break;
      case "clubs.html":
        history.pushState(null, "", "./");
        dt.ViewClubs(a);
        break;
      case "punishments.html":
        dt.ViewPunishments(a);
        break;
      case "major.html":
        t = {
          entityType: "major",
          entityId: a.majorId
        };
        history.pushState(null, "", "./");
        dt.ViewMajor(t);
        break;
      case "class.html":
        t = {
          entityType: "class",
          entityId: a.classId
        };
        history.pushState(null, "", "./");
        dt.ViewClass(t);
        break;
      case "club.html":
        t = {
          entityType: "club",
          entityId: a.clubId
        };
        history.pushState(null, "", "./");
        dt.ViewClub(t);
        break;
      case "partner.html":
        t = {
          entityType: "partner",
          entityId: a.partnerId
        };
        history.pushState(null, "", "./");
        dt.ViewPartner(t);
        break;
      case "punishment.html":
        t = {
          entityType: "punishment",
          entityId: a.punishmentId
        };
        history.pushState(null, "", "./");
        dt.ViewPunishments(a);
        break;
      case "schedule.html":
        history.pushState(null, "", "./");
        dt.ViewSchedule(a);
        break;
      case "rules.html":
        history.pushState(null, "", "./");
        dt.ViewInfo(a);
        break;
      case "progress.html":
        history.pushState(null, "", "./");
        dt.ViewProgress(a);
        break;
      case "ranking.html":
        history.pushState(null, "", "./");
        dt.ViewRanking(a);
        break;
      case "settings.html":
        history.pushState(null, "", "./");
        dt.ViewSettings(a);
        break;
      case "congratulations.html":
        history.pushState(null, "", "./");
        dt.ViewEndgame(a);
        break;
      case "task.html":
        t = {
          entityType: "task",
          entityId: a.taskId
        };
        history.pushState(null, "", "./");
        dt.ViewTask(t);
    }
  } catch (t) {
    console.log(t);
    alert(`ERROR - ${t}.`);
  }
};