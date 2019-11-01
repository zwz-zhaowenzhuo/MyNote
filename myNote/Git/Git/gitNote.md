# svn-集中式 & 分布式-git

    主要差别：
        Git 只关心文件数据的整体是否发生变化，而SVN这类版本控制系统则只关心文件内容的具体差异。
        Git 不会像 SVN一样在每一次提交的时候都将更新的详细信息都分析并提交

        Git 的绝大多数操作都只需要访问本地文件和资源，不必联网就可以看到所有的历史版本记录

        SVN 断开网络或者断开VPN就无法commit(提交)代码，但是Git 可以先commit(提交))到本地仓库

        Git 的内容完整性要优于SVN

        Git 克隆一个完整项目的速度非常快，SVN 非常慢

        总结：
            Git 不会以来网络、内容完整性高于SVM、克隆速度比SVN快
            SVN 依赖网络、内容完整性低于Git、克隆速度比Git慢

# Git 用户信息设置
    设置用户名：
        git config --global user.name "用户名"
    设置邮箱(可以接收信息的邮箱)：
        git config --global user.email 邮箱
    
    以上 一台电脑初始化一次即可 (重置电脑 & 删除所有个人信息 后需要再次设置)

# Git 查看信息
    查看个人信息
        git config --list
            按 q 键退出查看
    查看本地仓库的状态
        git status
            红色————工作区有修改但没有提交到缓存区
            绿色————工作区的修改提交到了 缓存区 但是缓存区的代码没有提交到 历史区
    查看所有提交过的版本信息
        git log
    只显示提交过的版本号和注释
        git log --pretty=oneline
    查看所有分支的所有操作记录(包括已经删除了的commit(提交)记录和reset的操作记录)
        git reflog
    查看每个区域的不同点
        工作区和暂存区的区别
            git diff
        工作区和历史区的区别
            git diff master
        暂存区和历史区的区别
            git diff --cached

# Git 设置本地仓库
    git init

# Git 提交信息
    把所有的文件从 工作区 提交到 缓存区
        git add .
    把所有的文件从 缓存区 提交到 历史区
        git commit -m "注释"
            写注释时需要语义化
    把所有文件快速的从 工作区 提交到 历史区
        git commit -a -m "注释"
            提交的前提是之前提交过一次才可以使用这个指令
    把所有的文件从 本地 提交到 远程仓库
        git push
            首次 push 时需要按提示进行
    
    多人合作时 提交代码前 先 git pull一下 在 git push 以避免代码冲突

# Git 获取代码
    将远程仓库的代码 克隆到本地仓库
        git pull

# 把代码上传到远程仓库的流程
    1、在Github上创建一个项目
    2、绑定密匙
        ssh-keygen -t rse -C "邮箱名"
            绑定一次即可
    3、确定版本库是最新的 (没有东西可以提交了)
    4、查看远程仓库
        git remotr -v
            使用git init 的时候是查不出东西来的
    5、查看远程仓库
        git remote add origin
    6、保证能够上传，进行远程和本地的合并
        git pull origin master
    7、上传
        git push origin master
            第一次需要输入用户名和密码

# 第二种上传流程
    1、在Github上创建一个项目
    2、克隆远程仓库到本次仓库
        git clone git仓库的地址(SSH的地址)
    3、将需要上传的文件放入文件夹中
    4、git add .
    5、git commit -m ""
    6、git push origin master