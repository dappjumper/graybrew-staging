<template>
  <div class="" style="max-width: 1000px; width:100vw; padding-top:3rem; padding-bottom:3rem;">
    <q-list style="">
      <q-expansion-item class="pair" :key="index" v-for="(item, index) in elements" :default-opened="index === 0" :label="item[0]" expand-icon="o_add" expanded-icon="o_remove" header-class="text-bold">
        <q-card>
          <q-card-section v-html="item[1]">
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<style scoped>
  .answer {
    padding-top:1rem;
    transform-origin: top center;
    max-height:3rem;
    overflow:hidden;
    transition:all .1s;
  }

  .shown {
    max-height:100%;
    opacity:1;
    transform:scale(1,1);
  }
  .pair {
    width:100%;
    max-width:1000px;
    padding-bottom:3rem;
    font-size:1rem;
  }
  .evened {
    background:rgba(255,255,255,0.05);
  }
</style>

<script>

export default {
  name: 'FAQ',
  methods: {
    togglePair (index) {
      const pair = document.querySelector('#faq_' + index + ' .answer')
      console.log(pair.className)
      if (pair.className === 'answer') {
        pair.className = 'answer shown'
      } else {
        pair.className = 'answer'
      }
    }
  },
  mounted () {},
  data () {
    return {
      elements: [
        [
          'Can I drink the entire bottle in one go?',
          `First of all… why? We’re not savages here (it’s cool if you are tho not judging).
<br/><br/>
But as with any coffee-based beverage, an adequate amount of caffeine goes a long way. Each bottle of Cold Brew x Gray Brew contains 250ML of concentrated coffee extract—you best believe that caffeine kick will come in strong like a wrecking-ball if you chug the entire thing in one breath. So just take it easy, twitchy. 
<br/><br/>You can have up to 3 servings if you portion your intake properly, which we highly recommend you do.`
        ],
        [
          'Is cold brew coffee the same as iced coffee?',
          `Quick answer: no! 🙅🏽‍♀️
<br/><br/>
You can make iced coffee from cold brew, but you can’t make cold brew from iced coffee… if that makes any sense? The key difference lies in the word “brew.” Cold brew coffee means the coffee from the beans is extracted with room temperature water (or colder) and leaving it alone to do some black (coffee) magic for at least a good half day. It’s a slow and sexy process but that’s how we get liquid gold in a bottle for you to enjoy how you drink your coffee.
<br/><br/>
And one of those ways is iced coffee, which is basically pouring an already prepared coffee drink from either cold-brewed or hot-brewed coffee over ice. Remember: Cold brew is a brewing method while iced coffee is how your drink is served.
`
        ],
        [
          'What’s the fuss about cold brew coffee?',
          `It’s less acidic, for a start. You know how sometimes when you drink hot-brewed coffee in the morning and your tummy goes ouchie?
          <br/>We don’t want that—we’ll never hurt you, baby.<br/><br/>Cold brew coffee can be 60% less acidic because it’s a less aggressive way of bringing out coffee from the beans compared to using hot water. Coffee beans are tiny delicate flavor-bombs, and it’s our pleasure to make time to give you coffee that’s less acidic, less bitter, and overall smoother, full-bodied coffee experience that’s better for your stomach (and teeth 😁).
`
        ],
        [
          'Because it’s cold brew, does it mean I can never drink my coffee hot again?',
          'No, you silly goose. With cold brew, the only limit is your imagination, not the temperature of your drink.<br/><br/>Because the unadulterated coffee essence is bottled for your drinking enjoyment, you are now free to enjoy your coffee to your heart’s desire. Just pour about a third of the bottle as your main coffee base then fill your cup with water—hot, boiling, lukewarm, ice-cold, or what have you, you’re no longer shackled to the societal coffee-drinking norms!  <br/><br/>And who says you’re limited only with water? Legend has it… milk, cream, ice cream, or even coconut milk all go well with the rich coffee taste of Gray Brew Coffee.<br/><br/>If you like your coffee as sweet as you are, sweeteners like sugar, honey, or even condensed milk are known to bring out the sweetness of cold brew coffee. Really, at this point, we’re more interested with the creative ways you enjoy your coffee!'
        ],
        [
          'I’ve tried other cold brew coffee and Gray Brew tastes better, what’s your secret ingredient?',
          'Apart from sourcing the top quality beans from farmers in Benguet, the only other ingredient we use to brew the beans is good ol’ water. The difference lies with our process, which falls nothing short of high quality cold brewing.<br/><br/>Needless to say, we do our very best to treat our coffee right which helps bring out the best flavor each coffee bean has in store.'
        ],
        [
          'What’s the best way to store cold brew coffee?',
          'Once opened, keep it refrigerated with the cap put on tightly.'
        ],
        [
          'How long does cold brew coffee stay fresh?',
          'Should last up to 10 days if stored in a cool dark place, preferably in the fridge. Fun fact: using amber glass bottles isn’t just for that coffee aesthetic. The darker shade of the glass (compared to clear ones) helps shield the coffee from direct light to make it last longer.'
        ],
        [
          'My empty Gray Brew bottles are stacking up, what do I do?',
          'At Gray Brew, we hate waste as much as we hate watered-down, piss coffee. Once you finish a bottle, just rinse and reuse them for whatever creative project you need them for. Or, the next time you order, you can give the rinsed bottles back to our delivery crew or drop them off at our locations in Manila or Makati. We’ll then take care of recycling. But whatever you do, don’t toss it in the bin—waste not, want not, amirite?'
        ]
      ]
    }
  }
}

</script>
