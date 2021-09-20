# Frontend Test
The backend developer has made an endpoint that returns an array of search results. Write a vue grid component consisting of the search results showing _at most_ 4 results per row. Each child component in the grid should look like the mockup below.

## Mockup of one result
![](images/mockup.png)

## Endpoint Description
```
GET ./json/question1.json
```
Each object consists of:
- The thumbnail url which is the image in the top of the mockup
- A message to display underneath the thumbnail
- A platforms array of objects describing the images in the bottom right of the mockup. It will always have "Facebook" or "Instagram" as the name of these objects. Here is an example of what the icon looks like when `"has_content": false`

  ![](images/platform-off.png)

  The images for the platforms is located in the `images/platforms` folder.


Additionally the section below is based on `format`, `total_assets` and `selected_assets`:

![](images/selected-section.png)

The numerator is the `selected_assets` and the denominator is the `total_assets`. Only formats IMAGE and VIDEO will have this. The others will simply display the icon like so:

![](images/basic-format.png)

The icon to the right varies based on format type. There is only four format types, the font-awesome related icon is given below:
1. TEXT - `fa-pencil`
2. URL - `fa-link`
3. IMAGE - `fa-camera`
4. VIDEO - `fa-video-camera`