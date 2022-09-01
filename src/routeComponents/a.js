
import staking_step_0 from "../imgs/staking_step_0.png";
import staking_step_1 from "../imgs/staking_step_1.png";
import staking_step_3 from "../imgs/staking_step_3.png";
import staking_step_4 from "../imgs/staking_step_4.png";
import staking_step_5 from "../imgs/staking_step_5.png";
import staking_step_6 from "../imgs/staking_step_6.png";
import staking_step_7 from "../imgs/staking_step_7.png";
import staking_step_8 from "../imgs/staking_step_8.png";
import staking_step_9 from "../imgs/staking_step_9.png";
import { poolName, poolNameShort } from "../utils/poolInfo";
import { Typography, Window, Wallpaper } from 'react-windows-xp';

export const A = () => {
  return <div>
    <style>
      {`
      .window {
        font-size: 15px;
      }
      .title-bar {
        font-size: 14px;
      }
      `}
    </style>
    
    <Section
      style={{marginBottom:'20px'}}
      q="Q: 手上有ADA为什么要转移到钱包进行质押？"
      a={<div>
        <Typography variant="paragraph">1. 钱包上的钱才是你真正控制的钱，交易所永远存在跑路或者破产的风险，对于hodl型用户，钱包是个更好的选择</Typography>
        <Typography variant="paragraph">2. 质押的ADA可以获得奖励，目前年化利率在4%左右。</Typography>
        <Typography variant="paragraph">3. 为了整个网络的安全性。如果一个PoS网络总质押的代币很少，那么攻击网络则会更容易。目前ADA的总质押率保持在70%，100%左右，较为安全。</Typography>
      </div>}
    />
    <Section
    style={{marginBottom:'20px'}}
      q="Q: 质押ADA的安全吗？有锁仓时间吗？"
      a={<div>
        <Typography variant="paragraph">这两个问题的简短的答案是：安全且没有锁仓时间。</Typography>
        <Typography variant="paragraph">ADA的质押不会将代币转移到质押池。当我们选择质押到某一个池子的时候，会生成一个质押证书，这个质押证书代表我们把这个钱包的钱的代理给质押池。由于没有真正转移ADA代币，所以质押的本金还在我们手中。</Typography>
        <Typography variant="paragraph">ADA的质押没有锁仓时间。质押的机制为每个纪元结束后进行快照，然后之后会根据快照进行奖励分发。</Typography>
      </div>}
    />
    <Section
      q="Q: 如何进行质押？"
      a={<div>
        <Typography variant="paragraph">首先需要将ADA代币转移到钱包，然后在钱包中选择质押池进行质押。大部分钱包都会提供质押的功能。下面我们以Chrome浏览器上使用Eternl wallet进行举例。</Typography>
        {/* <Typography variant="paragraph"></Typography> */}
        <Typography variant="paragraph">1. 安装一个Eternl wallet钱包，在Google搜索"Eternl Chrome Web Store"。</Typography>
        <img style={{width: "100%"}} src={staking_step_0}/>
        <Typography variant="paragraph">2. 点击第一个结果，然后点击"Add to Chrome"。</Typography>
        <img style={{width: "100%"}} src={staking_step_1}/>
        <Typography variant="paragraph">{`3. 安装完成后创建一个Eternl wallet钱包，点击 "Add Wallet" -> "Create wallet" ，输入钱包名字和密码。`}</Typography>
        <img style={{width: "100%"}} src={staking_step_3}/>
        <Typography variant="paragraph">{`4. 输入钱包的个数，一个助记词可以生成多个钱包，一般只要一个钱包即可。`}</Typography>
        <img style={{width: "100%"}} src={staking_step_4}/>
        <Typography variant="paragraph">5. 下一步是关于助记词的提示。<span style={{color: 'orange'}}>助记词非常重要，不要泄露,丢失助记词就是丢失了你自己的资产。</span></Typography>
        <img style={{width: "100%"}} src={staking_step_5}/>
        <Typography variant="paragraph">6. 点击Continue，记录下助记词。<span style={{color: 'orange'}}>请将助记词记录在纸上并做好备份，存在电脑或者云盘有被黑的风险。</span></Typography>
        <img style={{width: "100%"}} src={staking_step_6}/>
        <Typography variant="paragraph">7. 下一步验证刚才记下的助记词，这步虽然麻烦，但是可以确认你抄下的助记词是正确。</Typography>
        <img style={{width: "100%"}} src={staking_step_7}/>
        <Typography variant="paragraph">8. 钱包生成之后，没有ADA代币，点击"Receive"，复制一份地址后，就可以把交易所里的代币转移到这个钱包</Typography>
        <img style={{width: "100%"}} src={staking_step_8}/>
        <Typography variant="paragraph">9. 接收到代币之后，点击"Staking"，就可以搜索一个质押池子点击"Delegate"进行质押。<span style={{color: 'orange'}}>这里如果你愿意支持我们的"{poolName}"池，可以搜索"{poolNameShort}"进行质押。</span></Typography>
        <img style={{width: "100%"}} src={staking_step_9}/>


        {/* <Typography variant="paragraph">{`在币安购买到ADA代币之后。点击，资金 => 现货 => 提现 => 选择ADA => 通过区块链转账，将上面的地址填入地址输入框，转账网络选择"Cardano网络"，然后输入提现金额，验证后既可以提现。币安提现ADA到"Cardano网络"需要1 ADA手续费，一般需要等待5分钟左右能收到ADA代币（币安会将多币交易打包成一笔省手续费，所以需要花点时间）。`}</Typography>
        <Typography variant="paragraph">在接收到币安发送的代币之后，此时你的ADA已经在钱包里，但是并没有进行质押，我们还需要执行质押的操作才是质押成功。点击staking，在Filter Pools这里搜索质押池子，如何选择质押池请看todo，在这里如果你愿意支持我们的China Love Cardano Pool，可以搜索ChinaLoveCardanoPool。搜索到你要质押的池子后，点击Delegate进行质押。</Typography> */}
      </div>}
    />

{/* <Wallpaper  /> */}


  </div>
}

function Section({q, a, style}) {
  return <Window style={style} title={q}>
    {/* <h3>{q}</h3> */}
    <div>{a}</div>
  </Window>
  
}
// const Ans = () => {

// }

// 1. 手上有ADA为什么要转移到钱包进行质押？

// 钱包上的钱才是你真正控制的钱（详情看关于self-custody），对于不熟悉加密货币钱包的新手可以先了解一下钱包，如果你有一个硬件钱包的话可以更安全。

// 质押的ADA可以获得奖励，目前年化利率在4%

// 为了整个网络的安全性。如果一个网络总质押的代币很少，那么攻击网络则会更容易。目前ADA的总质押率保持在70%，100%左右，较为安全

// 2. 质押ADA的安全吗？有锁仓时间吗？

// 这两个问题的简短的答案是：安全且没有锁仓时间。

// ADA的质押不会将代币转移到质押池。当我们选择质押到某一个池子的时候，会生成一个质押证书，这个质押证书代表我们把这个钱包的钱的代理给质押池。
// 由于没有真正转移ADA代币，所以质押的本金还在我们手中。

// ADA的质押没有锁仓时间。质押的机制为每个纪元结束后进行快照，然后之后会根据快照进行分发奖励。

// 3. 如何进行质押？

// 首先需要将ADA代币转移到钱包。大部分钱包都会提供质押的功能。

// 下面我们以一个币安交易所转出为例子，nami wallet接收代币进行举例。

// 首先需要安装一个Eternl wallet钱包，在Chrome Web Store搜索Eternl Wallet，然后安装。安装完成后
// 创建一个Eternl wallet钱包，记录下助记词，助记词非常重要，不要泄露。获得地址后，就可以把交易所的代币转移到这个地址了。

// 在币安购买到ADA代币之后。点击，资金 => 现货 => 提现 => 选择ADA => 通过区块链转账，将上面的地址填入地址输入框，
// 转账网络选择"Cardano网络"，然后输入提现金额，验证后既可以提现。币安提现ADA到"Cardano网络"需要1 ADA手续费，
// 一般需要等待5分钟左右能收到ADA代币（币安会将多币交易打包成一笔省手续费，所以需要花点时间）。

// 在接收到币安发送的代币之后，此时你的ADA已经在钱包里，但是并没有进行质押，我们还需要执行质押的操作才是质押成功。点击staking，在Filter Pools这里搜索质押池子，
// 如何选择质押池请看todo，在这里如果你愿意支持我们的China Love Cardano Pool，可以搜索ChinaLoveCardanoPool。搜索到你要质押的池子后，点击Delegate进行质押。


