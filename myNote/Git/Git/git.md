# git分集中式和分布式

    集中式的缺点：
        必须联网、比较慢、都是用一个中央服务器，有可能会造成数据丢失

    分布式：
        不用联网就能进行版本控制、速度快

    git init ———— 创建本地仓库
    git status ———— 查看git状态
    git config --global user.name "" ———— 设置用户名
    git config --global user.email "" ———— 设置邮箱

    git add . ———— 从工作区提交到暂存区
    git commit -m "注释" ———— 从暂存区提交到版本区
    git commit -a -m "注释" ———— 快速把工作区的代码提交到版本区 (前提是文件提交过一次才可以使用)

    git log ———— 查看版本
    git reflog ———— 如果版本操作的多使用这个命令

    查看每个区域的不同点：
        git diff ———— 工作区和暂存区的区别
        git diff master ———— 工作区和版本区的区别
        git diff --cached ———— 暂存区和版本去的区别
        
    把代码上传到远程仓库：
        1、在github上创建一个项目
        2、绑定密匙
            ssh-keygen -t rsa -C "邮箱名" (绑定一次即可)
        3、确定版本库是最新的 （没有东西可以提交了）
        4、查看远程仓库：
            git remotr -v (使用git init的时候是查不出东西来的)
        5、查看远程仓库
            git remote add origin(←这个是桥梁名字 可以随意更改)
        6、保证能够上传，进行远程和本地的合并
            git pull origin master
        7、上传(第一次会出现让输入用户名和密码)
            git push origin master