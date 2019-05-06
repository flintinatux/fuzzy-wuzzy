# fuzzy-wuzzy

I wanted to try my hand at client-side fuzzy-searching and React's [`useReducer`](https://devdocs.io/react/hooks-reference#usereducer), so I put together this demo app over the weekend.

It's a fictitious list of users' names and addresses.  The sample data I found [here](https://www.briandunning.com/sample-data/) and converted from CSV to JSON to simulate a backend API.  Feel free to try out the hosted version at the link below:

https://flintinatux.github.io/fuzzy-wuzzy

You can search across every field in the table, and it should be forgiving of case and typos.  Here are some example searches:

- `NY`
- `Harris`
- `south`
- `sourh`
- `Donna`
- `middle`

You can also paginate through the results using the buttons at the top-right.

## What I learned

### ... about fuzzy-search

Since I wanted to search across all fields from the same input, my first stab at the fuzzy-search involved concatenating all the fields into a new field on which to search.  That yielded poor results, though, most likely because of the [`string-score`](https://github.com/knpwrs/string-score) algorithm I'm using.

So I switched to scoring every field on a given record, and then taking the max of all those scores.  This gives much better results, and while it is obviously less efficient - `O(n^2)` instead of `O(n)` - I haven't noticed any lag in the browser with only 500 records to search through.

**Note:** This will not work for large datasets, which I'll say might start on the order of 10,000 records.  I know from previous experience that the browser gets a little laggy iterating through a list that large.  So if that's your usecase, this won't be a good fit, and you should stick with a server-side search.  But many datasets are small enough to merit the near-instant speed of client-side searching.

### ... about `useReducer`

The best I can say is... it works?  It's a stripped down version of the real [`redux`](https://redux.js.org/), available as a hook.  No middleware or dev tools are supported, the latter of which I missed the most for this app.  I ended up pulling in [`reinspect`](https://github.com/troch/reinspect) to backfill support for dev tools, but at that point I've already added enough dependencies to merit using `redux` after all.

So maybe it's nice for some really small stand-alone components, but even with an app as small as this, it still felt limiting.
