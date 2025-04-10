import { serve } from "https://deno.land/std@0.203.0/http/server.ts";

// /home/devops/repositories/jackpack/jackpack.ts


const handler = (request: Request): Response => {
    return new Response("Hello, Deno Deploy!", {
        headers: { "content-type": "text/plain" },
    });
};

serve(handler);