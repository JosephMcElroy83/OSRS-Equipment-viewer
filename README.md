# Project Overview

## Project Name

OSRS-Equipment-viewer

## Project Description

Take input from the OSRSBOX API (contains all the games data needed) and injects it onto an interface where the user can select an item for each “Equip able piece” for a character. Each piece of equipment will have an array of stats, which will be pushed to a summed total of each stat to show on the side for totaled stats.

## API and Data Sample

https://github.com/osrsbox/osrsbox-api

```
    "_items": [
        {
            "_id": "610b62e66d4abbe9cf68804f",
            "id": "35",
            "name": "Excalibur",
            "last_updated": "2021-08-05",
            "incomplete": false,
            "members": true,
            "tradeable": false,
            "tradeable_on_ge": false,
            "stackable": false,
            "stacked": null,
            "noted": false,
            "noteable": false,
            "linked_id_item": null,
            "linked_id_noted": null,
            "linked_id_placeholder": 16525,
            "placeholder": false,
            "equipable": true,
            "equipable_by_player": true,
            "equipable_weapon": true,
            "cost": 200,
            "lowalch": 80,
            "highalch": 120,
            "weight": 2.267,
            "buy_limit": null,
            "quest_item": true,
            "release_date": "2002-02-27",
            "duplicate": false,
            "examine": "This used to belong to King Arthur.",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAYAAAB6kdqOAAABlElEQVR4XuWV/UoCQRTFvW/iI/QCgiEhYX8kSGKSRJJImmRmZppsREb0oYlfKRFR73ni3m3WacH+c2ahA5eFYZb9cc6Z2VDof4jgX7EowufrFAGBInxMJngbDgVoLRy2CUWYvfQFSMFYBCJM+z18zWfBcYdB3sdjGctAi6gCAORGxRAKyHJ/3KgYRo11d3QY60DzwSAoQITx89PSuKwAcVzskP9kWYBhLQfy7zQgwujxQSLj+0e/mQ0C8Z9b/b1dIHaIgdglw+4Q2vU6Oo3GD5RbaAVkxZ2z4zLurx35uIqLgdSaQRgW4c7peO4oIJ5FlHqkKxfhKJ/H+UnFA+JRkLdXbYmUXTQERdiKx7GTTOIgm0WlWPQcuWm1cFmrCbDqmKH4SPrCrrAjmVRKYE5LJezvZuSpYAwAuU44zaa40Ot2xbHtREKGXTMIwyKJ5aJa1Xrye4zCMARHUi4UxCUdQB//mysQCQQX9jCXk64YdsMvkn7spdNywvTi+ncaEmE9EsFGNIrNWMy2O0pWivu3DBc3ePoGJEi3eoT8/88AAAAASUVORK5CYII=",
            "wiki_name": "Excalibur",
            "wiki_url": "https://oldschool.runescape.wiki/w/Excalibur",
            "equipment": {
                "attack_stab": 20,
                "attack_slash": 29,
                "attack_crush": -2,
                "attack_magic": 0,
                "attack_ranged": 0,
                "defence_stab": 0,
                "defence_slash": 3,
                "defence_crush": 2,
                "defence_magic": 1,
                "defence_ranged": 0,
                "melee_strength": 25,
                "ranged_strength": 0,
                "magic_damage": 0,
                "prayer": 0,
                "slot": "weapon",
                "requirements": {
                    "attack": 20
                }
            }
```

## Wireframes

https://xd.adobe.com/view/7c37346a-9513-4da9-9c52-3e834def3216-2964/

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

• Put images on correct spot using flex-box

• Display a sum of stats on the side

• Select menu for each slot

• Make sure correct images match the given item

• Make function to select ONLY relevant information due to complexity of the objects

#### PostMVP

• Make a preset saver (show JSON object to copy and share with others)

• Access the OSRS official API to get user data to use

• Take user data and apply conditionals that say whether you can or cannot use the gear present.

• Add math functions to calculate damage with equipment

• Add in prayer bonuses to stats

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day        | Deliverable                                        | Status     |
| ---------- | -------------------------------------------------- | ---------- |
| July 10-12 | Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete |
| July 13    | Project Approval                                   | Incomplete |
| July 13    | Core Application Structure (HTML, CSS, etc.)       | Incomplete |
| July 14    | Pseudocode / actual code                           | Incomplete |
| July 15    | Initial Clickable Model                            | Incomplete |
| July 16    | MVP                                                | Incomplete |
| July 17    | Presentations                                      | Incomplete |

## Priority Matrix

| Component                          | Priority |
| ---------------------------------- | :------: |
| Boilerplate                        |   1st    |
| Responsive layout                  |   2nd    |
| Data pull for Selectors            |   3rd    |
| create Selectors & logic           |   4th    |
| search function                    |   5th    |
| flex-box placements                |   6th    |
| dynamic img placements on flex-box |   7th    |
| scale up to web size               |   8th    |

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component                  | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------- | :------: | :------------: | :-----------: | :---------: |
| HTML boilerplate           |    H     |      1hrs      |      hrs      |     hrs     |
| make basic css layout      |    H     |      2hrs      |      hrs      |     hrs     |
| pseudo code logic JS       |    H     |      2hrs      |      hrs      |     hrs     |
| fetch data                 |    H     |      1hrs      |      hrs      |     hrs     |
| create selectors for items |    H     |      3hrs      |      hrs      |     hrs     |
| attach logic to buttons    |    H     |      3hrs      |      hrs      |     hrs     |
| creating dynamic search    |    H     |      4hrs      |      hrs      |     hrs     |
| flex-box icon placements   |    H     |      4hrs      |      hrs      |     hrs     |
| stat calc & placement      |    H     |      3hrs      |      hrs      |     hrs     |
| create dynamic JS imgs     |    H     |      3hrs      |      hrs      |     hrs     |
| scale up to web size       |    H     |      4hrs      |      hrs      |     hrs     |
| Total                      |    H     |     30hrs      |      hrs      |     hrs     |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.
