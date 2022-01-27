---
  title: 'Web-Development on an Android Tablet Pt.1'
  date: 2022-01-26
  lastmod: 2022-01-27
  tags:
    - 'Web-Development'
    - 'Android'
    - 'Neovim'
    - 'Termux'
  cover: 'https://comentic.sirv.com/Images/gwigwi.com-xiaomi-pad-5-mendarat-ke-indonesia-setelah-global-launch-harga-dan-spesifikasi-1-1000x600.jpg'
---
## Introduction


Today I bought the **Xiaomi Pad 5**. I needed an affordable portable device for when I'm not at home. My use cases where the following:

- browsing the Web, YouTube and Reddit
- some light Web-Development
- conference-calls and video interviews

I didn't want a laptop since I can't be asked to use the built in keyboard and that would just take up extra space. Ideally I would've wanted a linux tablet, but the options are very limited. I looked into convertibles and *Windows* tablets (in particular the *Surface* product line) but the price points on any models that I liked were too much of a turn off. 

So I thought I'll give *Android* a try. The options for affordable tablets are much more plentyful with that OS. I'm aware that I'll have to make due with a much more limited environment. So this will be an experiment and I'm not sure that I'll stick with it. 

This will be part 1 of a multipart series. I'll try to write down my thoughts each day and give a verdict after about 10 days.

## Sofware Availability
This was bound to be one of the biggest problems. I was prepared to use a lot of web-apps to make up for the lack of quality *FOSS* native applications. My preferred browser (Brave) and password manager (Bitwarden) were available in the *Play Store*, so that was nice. However IDEs and Terminal Emulators aren't things that can be found on most peoples Android devices. There is an app called **Termux** that proved to be my saving grace.

## Termux

The most popular terminal emulator on *Android* is actually a pretty decent replacement for what I'm used to. It's not *Alacritty* but I was surprised at how easy it was to install *Git* and *Neovim*. 

Initially I wasn't able to install anything but a quick search revealed an easy enough solution.

This command:
```
termux-change-repo
```
allows you to change the default repo and doing that got rid of the error messages. Then I could install the apps I needed with: 
```
pkg install git clang neovim nodejs-lts
```
After the installation was completed I just pulled my *Neovim* config and I was ready to go.
Again: **I was surprised at how quickly and easily I got this working.**

## npm run dev

<div align="center">
  <img class="Sirv" data-src="https://comentic.sirv.com/Images/Screenshot_2022-01-26-19-51-58-688_com.brave.browser.jpg" alt="npm_run_dev.jpg" />
</div>

The built-in split screen functionality allowed me to look at my editor and the website at the same time. Usually I would to this with mulitple monitors but this wasn't too bad.

## Thoughts after Day 1
### The good
- Termux is intuitive to use and offers linux web-apps
- Split screen works well
- Popular apps are available through the *Play Store*
### The bad
- Lots of bad native apps with tons of ads
- Escape-Key is remapped to ` for some reason which is especially annoying in Neovim
- Poor support for navigation with keyboard shortuts
 
Some things work surprisingly well while other things (that are crucial to my workflow don't work at all). Making this post definitely took a lot longer than it would have on my main PC. That is in large due to the fact, that it wasn't easy to find a serviceable image editing app to make the thumbnail. I find myselft having to leave my keyboard and reach for the touchscreen a lot which sucks. I'm not sure this is a keeper. We'll see.

*to be continued... *
