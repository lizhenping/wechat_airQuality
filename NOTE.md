 # 本人的appID:	wx87175f7067feb659
 # 微信开发者工具常用快捷键:
 ctrl+shift+s: 保存所有文件;
 ctrl+shit+n: 快速新建项目;
 alt+上下键: 快速移上移下一行;
 shift+alt+上下键： 往上或者往下复制一行;
 shit+alt+f:格式化代码;
 快速打开文件: ctrl+p,进行搜索;
 快速打开最近打开文件: ctrl+e;
 項目內搜索：需要注意焦點必須在編輯器外面，然後ctrl+shift+f即可;
 ctlr+b： 快速编译
 ctrl+shift+p: 预览代码

 # 上传本地代码到github：
 1）git init： 初始化本地目录为git目录
 2）git add . 添加文件至仓库
 3) git commit -m "文件名" 将add的文件提交到仓库
 4) 创建gitHub的https，进行关联
 5）git remote add origin https://github.com/lizhenping/wechat_airQuality
    进行本地的仓库关联到github上
 6)上传之前，要先pull下，这里容易报错:git无法pull仓库refusing to merge unrelated histories
  解决方案： git pull origin master --allow-unrelated-histories
 7)推送到远程github上: git push -u origin master
 注意: 创建.gitignore文件[即隐藏规则，忽略哪些文件不需要引入到版本管理中]
       该文件只能用于未被untracked的文件,也就是从来没有被git记录过的文件,若曾被记录过,则该文件是        完全失效的;