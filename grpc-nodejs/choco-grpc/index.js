
const { buildHttpClient } = require('../../choco-appsync/packages/protoClient/dist/code/index');

const INTERNAL_API_URL = 'https://internalapi.chorizos.envs.spezi.app';

const getBuyer = async ({buyerId}) => {
    const response = await buildHttpClient(
        `${INTERNAL_API_URL}/buyerV2`, "getBuyer"
    ).request({ buyerId });
    console.log("response",response);
    return response.data;
}

async function main() {
    buyer = await getBuyer({buyerId: "029a7253-7c68-4673-a2ec-24f7c790a4d7"});
    console.log(buyer);
}

main();