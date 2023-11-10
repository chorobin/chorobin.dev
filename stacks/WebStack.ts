import { RemixSite, StackContext } from 'sst/constructs';

export const WebStack = ({ stack }: StackContext) => {
    const site = new RemixSite(stack, 'Web', {
        path: "./packages/web"
    })

    stack.addOutputs({
        Url: site.url
    })
}
