# The State of AVS

## Short version

No version of AVS will perform reliably with any new Winamp version.

## Long version

Today, I want to talk about recent changes in [Winamp](http://winamp.com) and [AVS](http://en.wikipedia.org/wiki/Advanced_Visualization_Studio). Don't worry, this is not going to be a rant on how irrelevant AVS has gotten or how we all miss the old days. This article will focus on the software side of the matter.

To everybody's suprise, there were a couple of new AVS versions: 2.82, 2.83 and Justin's 2.9, the latter also known as [http://forums.winamp.com/showthread.php?t=321482](http://forums.winamp.com/showthread.php?t=321482). The former versions tried to align the outdated AVS with the changes that were introduced in newer Winamp versions, basically related to the localization of the software. Unfortunately, these version did not meet up anybody's expectations and they performed poorly, usually resulting in frequent crashes. [Justin Frankel](http://en.wikipedia.org/wiki/Justin_Frankel), the creator of the original AVS (and Winamp), did not manage to improve the situations with his fork. His new version of AVS focused on introducing a couple of (rather irrelevant) features.

As a reaction to all these problems, Nullsoft decided to bundle the older AVS 2.81d with its new Winamp versions (5.6 and later.) Again, things did not go too well due to changes in the architecture of Winamp. To make a long story short: no version of AVS will perform reliably with any new Winamp version.

The solution? Well, I wouldn't call it a solution, but there's a workaround. First, it should also be noted that old versions of Winamp are flawed with some serious bugs! If you still want to go on, you need to install an old version of Winamp, the last version that works with AVS is [Winamp 5.58](http://www.oldversion.com/windows/winamp-5-58). Then you will need any version of AVS 2.81, the original or any modification like *vis_avsmod*. You will find a couple of more versions over here, but I recommend to stick with what I just described.

Of course, you can also use AVS with a couple of other players, most notably [foobar2000](http://www.foobar2000.org/) and [XMPlay](http://www.un4seen.com/). I have previously written some [instructions](http://visbot.net/faq/) on how to setup AVS for third party players.

Apart from that, you might still run into crashes when using Windows Vista, Windows 7 or any 64-bit version of Windows. Most of the times, those crashes are related with the *Global Variables APE*, but oddly enough they don't happen with every preset using that APE. Once your Winamp crashed because of that, the only way to get you out of problems is deleting the vis_avs.dat file (located in your Winamp/Plugins directory.) You can avoid this by installing and old Windows version in a virtual machine, such as the [Windows XP Mode](http://windows.microsoft.com/en-us/windows7/products/features/windows-xp-mode) that comes with Windows 7 Pro (and Ultimate) or third party product like [VMware Workstation](http://www.vmware.com/products/workstation/) or the free [VirtualBox](https://www.virtualbox.org/).

I hope you find this article helpful, please share it with everybody you know who has run into any of the described problems!

*This is a slightly revised version of [The State of AVS](http://visbot.deviantart.com/journal/The-State-of-AVS-218486857), first published on May 25, 2011 and revised on September 15, 2013*