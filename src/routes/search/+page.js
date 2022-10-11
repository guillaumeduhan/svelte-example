export async function load({ url }) {
    let input = url.searchParams.get('input');
    return { input };
}