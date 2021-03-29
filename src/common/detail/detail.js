import React,{Component} from "react"
import './detail.css'
export default class Detail extends Component {
    render() {
        return (
            <div className='bg'>
                <div className='detailWrap'>
                    <div className='left'>
                        <div className='title'>个人从零开发一款 Android 应用、上线并盈利 | 项目复盘</div>
                        <div className='authorInfo'>
                            <img alt='图片丢失' src='https://upload.jianshu.io/users/upload_avatars/6855581/26cc35b4-d59c-4d86-99ec-5ffe51d5e997.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96'/>
                            <div className='authorDetail'>
                                <div>
                                    <span className='author' style={{fontSize: "16px",fontWeight: 500,marginRight: "8px"}}>不爱吃鱼的猫</span>
                                    <span className='attention' style={{color: "#ec7259",backgroundColor: "#fff",borderColor: "#ec7259",border: 'solid 1rpx #ec7259'}}>关注</span>
                                </div>
                                <div>
                                    <span className="iconfont diamond">&#xe728;</span>
                                    <span className='diamondSum'>1</span>
                                    <span className='readSum'>2021.03.20 22:29:15 字数 5,424阅读 826</span>
                                </div>
                            </div>
                        </div>
                        <div className='paper'>
                            最近个人开发的一款应用 言叶 刚刚发布了 1.4.0，至此，我想要开发的大部分功能已经完成了。本来我也想做一次复盘，刚好趁这个机会分析下并发出来。在这篇文章中，我想分析的并不仅仅是技术，除此此外，我也会分析下这个产品、开发过程中有哪些做得好和不好的地方以及接下来的打算。
                            1、项目背景

                            这个应用是一款笔记应用。其实，一开始要做它，我也是拒绝的。

                            因为我觉得这类应用门槛和天花板都比较低，同类和类似的应用都比较多，花费功夫做一个收益也不会太大。后来打算做是出于几个原因：

                            第一，我大概写了三周的电商爬虫并部署到三台服务器上，Python 写得有点吐，想换个心情写写 Kotlin；
                            第二，对于很多互联网项目，在项目初期是很难盈利的，而达到收支平衡更需要一定的时间，所以我就想开发一款应用赚点“快钱”；
                            第三，我前些时间又翻了翻周鸿祎的互联网方法论，其中有说到，如果一个项目能够解决几个用户痛点就值得做，我深以为然，于是就设计并开发了这个应用。

                            这个应用所解决的用户痛点是，<b>跨平台写作的问题</b>。的确，有很多笔记应用是可以跨平台的，但是这类笔记一般收费比较高而且对开发者来说回报也不高，比如印象笔记、有道笔记等。这类应用存在一个问题，他们的文件格式基本是自己定义的，因此就不容易做到通用。而如果我使用 Markdown 语法以文件目录形式管理笔记，使用相对目录在笔记内部进行文件引用，同时提供云同步来实现多端协作。那么我就可以做到：

                            首先，解决了用户多端写作的问题，毕竟移动端编辑不方便，我们可以在编辑完成之后将笔记同步到手机上，进行阅读、校对或者继续编辑等。
                            其次，通过内容和管理方式的规范，我就没必要编写其他平台（比如 PC 或者 iOS）的客户端了。毕竟术业有专攻，就算我开发一个其他平台的应用，不熟悉环境不说，用户体验也不见得比现有的好。
                            最后，用户可以通过 WebDAV 或者其他手段进行数据同步，那么我就没必要自己搭建服务器存储用户的笔记数据了。

                            基于以上几点以及之前的技术沉淀，我估摸着就算开发一个也不会花费太长的时间。最后，从设计、开发（客户端+服务器）用了大概一个多月的时间。不过，随后我发现随着自己想做的事情越来越多，就又投入了几个月进去。当然，这个应用一上线就有用户购买的，这有几个原因：

                            作者：你好_开发者
                            链接：https://www.jianshu.com/p/00e7a947a5da
                            来源：简书
                            著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
                        </div>
                    </div>
                    <div className='right'>
                        <div className='authorCell'>
                            <div className='authorInfoWrap'>
                                <div className='authorInfo'>
                                    <img alt='图片丢失' src='https://upload.jianshu.io/users/upload_avatars/6855581/26cc35b4-d59c-4d86-99ec-5ffe51d5e997.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96'/>
                                    <div className='authorDetail'>
                                        <div>
                                            <span className='author' style={{fontSize: "16px",fontWeight: 500,marginRight: "8px"}}>不爱吃鱼的猫</span>
                                            <span className='attention' style={{color: "#ec7259",backgroundColor: "#fff",borderColor: "#ec7259",border: 'solid 1rpx #ec7259'}}>关注</span>
                                        </div>
                                        <div>
                                            <span className='readSum'>总资产879 (约47.31元)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='interest'>
                                <div className='item'>
                                    <div className='name'>日更的日子</div>
                                    <div className='readCount'>阅读248</div>
                                </div>
                                <div className='item'>
                                    <div className='name'>日更的日子</div>
                                    <div className='readCount'>阅读248</div>
                                </div>
                                <div className='item'>
                                    <div className='name'>日更的日子</div>
                                    <div className='readCount'>阅读248</div>
                                </div>
                            </div>
                        </div>
                        <div className='suggestion authorCell'>
                            <div className='interestLabel'>
                                推荐阅读
                            </div>
                            <div className='interest'>
                                <div className='item'>
                                    <div className='name'>日更的日子</div>
                                    <div className='readCount'>阅读248</div>
                                </div>
                                <div className='item'>
                                    <div className='name'>日更的日子</div>
                                    <div className='readCount'>阅读248</div>
                                </div>
                                <div className='item'>
                                    <div className='name'>日更的日子</div>
                                    <div className='readCount'>阅读248</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}