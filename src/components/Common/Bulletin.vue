<template>
  <div>
    <h2>{{ $t("bulletin.title") }}</h2>
    <el-collapse value="rule">
      <el-collapse-item name="rule">
        <template slot="title">Welcome to cug CTF !</template>
        <article>
          <ul>
            <li>CTF是什么?</li>
            <li>
              CTF 夺旗赛，是信息安全技术竞赛的一种形式，也是一种历史悠久的黑客游戏，起源于DEFCON，拥有浓厚的黑客文化。拿到一个flag（其实就是一串字符），
              代表你已经攻陷了某一个服务器，破解了某一个软件，破译某种有安全问题的密码算法或协议，也可能是从一组网络流量或者音频视频文件中找到了隐藏的信息。
            </li>
          </ul>
        </article>
        <article>
          <ul>
            CTF的比赛形式？
            <li>解题模式（ Jeopardy ）</li>
            <li>战争分享模式 （Belluminar）</li>
            <li>攻防模式 （Attack–Defense）</li>
            <li>类型</li>
            <li>Web漏洞与渗透 (Web)</li>
            <li>软件逆向 (Reverse Engineering)</li>
            <li>漏洞挖掘和利用 (Exploit(PWN))</li>
            <li>密码学原理及应用 (Crypto)</li>
            <li>信息搜集等杂项 (Misc)</li>
            <li>快速漏洞挖掘和利用能力</li>
            <li>攻击和防御的综合能力</li>
            <li>流量分析和快速学习能力</li>
            <li>团队分工协作能力</li>
            <li>其他安全方面的扎实基本功</li>
            <li>持续作战的能力（常为1.5天）</li>
          </ul>
          <ul>
            关于我们？
            <li>
              我们的社团目前主要由Web、Crypt、Pwn、Reverse、Misc五个部门组成，
              我们的宗旨是：以学生兴趣为导向， 完成从书本知识到实际能力的转化。
              我们会尽己所能带领大家:
            </li>
            <li>加入校内安全团队, 才有集体荣誉感并坚持下来</li>
            <li>持续参加比赛和训练, 坚持不懈的努力付出</li>
            <li>即使不能站到世界顶峰，也足以在同龄人中脱颖而出</li>
            <li>和科研相结合，安全能力输出形式可以多样化</li>
            <li>从国内走向国际，迎接挑战才有飞跃进步</li>
          </ul>
        </article>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {};
</script>
