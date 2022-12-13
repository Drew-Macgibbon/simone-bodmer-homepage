## Simone Bodmer-Turner's Homepage
This is the original [homepage](https://simonebodmerturner.com/)

This is intended only as a showcase of my skills and will not be used for any comercial gain.  
If was at my workstation the quality of work and speed of delivery would have been much swifter, my mobile is aboutdesktopplode from hotspotting!

  
    

  
<table style="margin-top: 40px;">
  <tr>
    <td valign="top" width="34%"><img src="https://github.com/Drew-Macgibbon/simone-bodmer-homepage/blob/development/public/mobile-design.gif"/></td>
    <td valign="bottom" width="65%">
      <h3 align="center">Project video overview</h3>
      <p> I managed to get the design of the website sorder fairly quickly. The layout seemed more complecated than it was and after scratching my head for a while I             deduced that <code> mix-blend-mode: difference; </code> was the way to go. </p>
        <a href="https://simone-bodmer-turner.onrender.com/">   
          here's my live version of the site  
        </a>
      <img src="https://github.com/Drew-Macgibbon/simone-bodmer-homepage/blob/development/public/desktop-design.gif" style="margin-top: 40px;"/>
    </td>
  </tr>
</table>
<a align="center" style="margin-bottom: 0px !important; width="600px" href="https://vimeo.com/780827413">
  <img src="https://github.com/Drew-Macgibbon/simone-bodmer-homepage/blob/development/public/video-thumbnail.png" width="100%" >
</a>
   

<h3 align="center" style="margin-top: 40px;">I got carried away...</h3>
<p align="center">   
  I also played for a while, refactored some code and tried out a design cahnge.
  So far it's only checked on Laptop and greater screen sizes, it's likely rubbish on Mobile!  
</p>

<p align="center" style="margin-top: 20px !important;">
  <img src="https://github.com/Drew-Macgibbon/simone-bodmer-homepage/blob/development/public/new-design.gif" align="center" width="100%">
</p>
<a align="center" href="https://simone-bodmer-dev.onrender.com/" style="margin-bottom: 60px !important;">   
  Check it out here  
</a>

### I also thought about some things I could improve!
(Some may be irrelevent, as I don't fully understand the project)

- SEO/Pagespeed:
  - Images:
    - They could be cropped better, lots of empty pixels in the PNG files
    - Definitely need to be optimized
    - Could either manually optimize or;
    - Use an automated servie like Cloudinary, or;
    - Something like Nuxt/Image to optimize on client side.
  - Javascript can be extracted to webworker to free up the main thread, this will improve pageload
  - Since the pages don't require a lot of user input, we can leverage Static Site Generate (pre-rendering the pages)
- UX:
  - The hero section could do a better job explaining what the business is about. The footer video might be better placed in the hero.
  - Images overflow the viewport height/width. Only having half a sculpture in view doesn't seem optimal to me.
- To-update:
  - "TAKE PART IN FEB 10 - APRIL 1, 2022 Solo debut of sculpture..." needs to be updated
- Business:
  - The homepage should showcase the artist more.
  - Why do I care about the sculptures (on homepage), maybe one sentace per peice,
  - Showcase some media coverage, competitions etc.
  - Have a clear call to action at the bottom of page, possibly an email signup box.
    - Could use some color here, would stand out greatly since the rest of the page is dull

Generally I have a good eye for detail, so as I get going I'll definitely add more to the list.

I'm currently checking to see if I have improved the page speed at all, will upload the results shortly/

let me know what you think!
