const KontentDelivery = require("@kontent-ai/delivery-sdk");

const deliveryClient = KontentDelivery.createDeliveryClient({
  environmentId: process.env.KONTENT_ENVIRONMENT_ID,
  secureApiKey: process.env.KONTENT_DELIVERY_KEY,
  previewApiKey: process.env.KONTENT_DELIVERY_KEY,
  defaultQueryConfig: {
    useSecuredMode: true, // Enabled secure access for all queries
    usePreviewMode: true, // Queries the Delivery Preview API.
  },
});

// Define content type codenames (IDs) for Kontent.ai
const ContentTypeCodenames = {
  recipe: "recipe",
};

export const getRecipeList = async () => {
  const response = await deliveryClient
    .items()
    .type(ContentTypeCodenames.recipe)
    .toPromise();

  const recipes = response.data.items.map((item) => {
    return {
      title: item.elements.recipe_title.value,
      image: item.elements.recipe_image?.value[0].url,
      slug: item.elements.slug.value,
      keywords: item.elements.taxonomy.value,
      body: item.elements.recipe_body.value,
    };
  });

  return recipes;
};
