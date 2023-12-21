const KontentDelivery = require("@kontent-ai/delivery-sdk");

const deliveryClient = KontentDelivery.createDeliveryClient({
  environmentId: process.env.KONTENT_ENVIRONMENT_ID,
  secureApiKey: process.env.KONTENT_DELIVERY_KEY,
  previewApiKey: process.env.KONTENT_DELIVERY_KEY,
  defaultQueryConfig: {
    // Enabled secure access for all queries
    useSecuredMode: true,
  },
});

// Define content type codenames (IDs) for Kontent.ai
const ContentTypeCodenames = {
  recipes: "recipes",
};

export const getRecipeList = async () => {
  const response = await deliveryClient
    .items()
    .type(ContentTypeCodenames.recipes)
    .toPromise();

  const recipes = response.data.items.map((item) => {
    return {
      title: item.elements.title.value,
      description: item.elements.description.value,
      image: item.elements.image.value,
      slug: item.elements.slug.value,
      keywords: item.elements.keywords.value,
      body: item.elements.body.value,
    };
  });

  return recipes;
};
