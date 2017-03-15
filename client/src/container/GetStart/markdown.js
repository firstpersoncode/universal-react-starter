export default `<div id="readme" class="readme blob instapaper_body">
<p><em><strong>Project Structure</strong></em></p>
<div class="highlight highlight-source-js"><pre>setup<span class="pl-k">-</span>isomorphic<span class="pl-k">-</span>javascript
	client
		 src
 			component <span class="pl-c"><span class="pl-c">//</span> dumb component (stateless component)</span>
			container <span class="pl-c"><span class="pl-c">//</span> smart component connected with redux store</span>
			<span class="pl-smi">reducers</span>.<span class="pl-smi">js</span> <span class="pl-c"><span class="pl-c">//</span> config reducer</span>
			<span class="pl-smi">routers</span>.<span class="pl-smi">js</span> <span class="pl-c"><span class="pl-c">//</span> config router</span>
		App <span class="pl-c"><span class="pl-c">//</span> layout + provider</span>
		<span class="pl-smi">index</span>.<span class="pl-smi">html</span>
		<span class="pl-smi">index</span>.<span class="pl-smi">js</span> <span class="pl-c"><span class="pl-c">//</span> entry point</span>
	server
		bin
		db
			model <span class="pl-c"><span class="pl-c">//</span> schemas</span>
			<span class="pl-smi">index</span>.<span class="pl-smi">js</span> <span class="pl-c"><span class="pl-c">//</span> config db</span>
		routes <span class="pl-c"><span class="pl-c">//</span> source router</span>
		views <span class="pl-c"><span class="pl-c">//</span> jade files</span>
		<span class="pl-smi">app</span>.<span class="pl-smi">js</span> <span class="pl-c"><span class="pl-c">//</span> entry point</span>
	<span class="pl-k">package</span>.<span class="pl-smi">json</span>
	<span class="pl-smi">webpack</span>.<span class="pl-smi">config</span>.<span class="pl-smi">js</span> <span class="pl-c"><span class="pl-c">//</span> config webpack</span>
  <span class="pl-k">public</span> <span class="pl-c"><span class="pl-c">//</span> static files</span>
</pre>
  </div>

<h4><a id="user-content-component--container-structure" class="anchor" href="#component--container-structure" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>component &amp; container structure</h4>
<div class="highlight highlight-source-js"><pre>component
	Header
		<span class="pl-smi">index</span>.<span class="pl-smi">js</span> <span class="pl-c"><span class="pl-c">//</span> entry component</span>
		<span class="pl-smi">style</span>.<span class="pl-smi">css</span> <span class="pl-c"><span class="pl-c">//</span> styling for component</span>

container
	Home
		<span class="pl-smi">action</span>.<span class="pl-smi">js</span> <span class="pl-c"><span class="pl-c">//</span> actions for dispatching store</span>
		<span class="pl-smi">constants</span>.<span class="pl-smi">js</span> <span class="pl-c"><span class="pl-c">//</span> action type</span>
		<span class="pl-smi">index</span>.<span class="pl-smi">js</span> <span class="pl-c"><span class="pl-c">//</span> entry container</span>
		<span class="pl-smi">reducer</span>.<span class="pl-smi">js</span> <span class="pl-c"><span class="pl-c">//</span> container's reducer</span>
		<span class="pl-smi">style</span>.<span class="pl-smi">css</span> <span class="pl-c"><span class="pl-c">//</span> styling for container</span>
	</pre></div>
<h2><a id="user-content-start-development" class="anchor" href="#start-development" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>START development</h2>
<p>client-side :</p>
<div class="highlight highlight-source-shell"><pre>npm run dev</pre></div>
<p>bundle client-side :</p>
<div class="highlight highlight-source-shell"><pre>npm run build</pre></div>
<p>server-side :</p>
<div class="highlight highlight-source-shell"><pre>npm run start</pre></div>

<h3><a id="user-content-lets-get-started" class="anchor" href="#lets-get-started" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Let's get started</h3>
<p><code>/client/src/component</code>, contains dumb React components which depend on containers for data.
<code>/client/src/container</code>, contains React components which are connected to the redux store.
<em><strong>Container components care about how things work, while components care about how things look.</strong></em></p>
<h4><a id="user-content-config-router" class="anchor" href="#config-router" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>config router</h4>
<p><code>/client/src/routers.js</code>
config for routing, import component and set its path.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">Profile</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">"</span>./container/Profile<span class="pl-pds">"</span></span>;
<span class="pl-k">import</span> <span class="pl-smi">About</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">"</span>./container/About<span class="pl-pds">"</span></span>;

<span class="pl-k">export</span> <span class="pl-c1">default</span> [{
  path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/about<span class="pl-pds">'</span></span>,
  component<span class="pl-k">:</span> About,
}, {
  path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/profile<span class="pl-pds">'</span></span>,
  component<span class="pl-k">:</span> Profile,
}];</pre></div>
<h4><a id="user-content-config-reducer" class="anchor" href="#config-reducer" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>config reducer</h4>
<p><code>/client/src/reducers.js</code>
combine all reducers created in component's folder</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> { <span class="pl-smi">combineReducers</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>redux<span class="pl-pds">'</span></span>;

<span class="pl-k">import</span> <span class="pl-smi">homeState</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">"</span>./container/Home/reducer<span class="pl-pds">"</span></span>;
<span class="pl-k">import</span> <span class="pl-smi">aboutState</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">"</span>./container/About/reducer<span class="pl-pds">"</span></span>;

<span class="pl-k">export</span> <span class="pl-c1">default</span> <span class="pl-smi">combineReducers</span>({
  homeState,
  aboutState,
});</pre></div>
<h4><a id="user-content-config-database" class="anchor" href="#config-database" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>config database</h4>
<p><code>/server/db/model</code>
exporting all schemas created in <code>/server/db/model</code> directory.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">mongoose</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>mongoose<span class="pl-pds">'</span></span>);
<span class="pl-k">const</span> <span class="pl-c1">Headers</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./headersSchema<span class="pl-pds">'</span></span>);
<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  Headers,
};</pre></div>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> sample schema</span>
<span class="pl-k">const</span> <span class="pl-c1">mongoose</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>mongoose<span class="pl-pds">'</span></span>);
<span class="pl-k">const</span> <span class="pl-c1">headersSchema</span> <span class="pl-k">=</span> <span class="pl-smi">mongoose</span>.<span class="pl-en">Schema</span>({
  data<span class="pl-k">:</span> <span class="pl-c1">String</span>,
});
<span class="pl-k">const</span> <span class="pl-c1">Headers</span> <span class="pl-k">=</span> <span class="pl-smi">mongoose</span>.<span class="pl-en">model</span>(<span class="pl-s"><span class="pl-pds">'</span>Headers<span class="pl-pds">'</span></span>, headersSchema);

<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> Headers;</pre></div>
<h4><a id="user-content-config-api" class="anchor" href="#config-api" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>config API</h4>
<p><code>/server/app.js</code></p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">express</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>express<span class="pl-pds">'</span></span>);
<span class="pl-k">const</span> <span class="pl-c1">app</span> <span class="pl-k">=</span> <span class="pl-en">express</span>();
<span class="pl-k">const</span> <span class="pl-c1">headers</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./routes/headers<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">//</span> app source</span>
<span class="pl-smi">app</span>.<span class="pl-en">use</span>(<span class="pl-s"><span class="pl-pds">'</span>/headers<span class="pl-pds">'</span></span>, headers);</pre></div>
<p><code>/server/source/</code></p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> sample API</span>
<span class="pl-k">var</span> express <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>express<span class="pl-pds">'</span></span>);
<span class="pl-k">var</span> router <span class="pl-k">=</span> <span class="pl-smi">express</span>.<span class="pl-en">Router</span>();
<span class="pl-k">const</span> { <span class="pl-c1">Headers</span> } <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../db/model<span class="pl-pds">'</span></span>);

<span class="pl-k">const</span> <span class="pl-c1">getHeaders</span> <span class="pl-k">=</span> (<span class="pl-smi">callback</span>) <span class="pl-k">=&gt;</span> {
  <span class="pl-smi">Headers</span>.<span class="pl-c1">find</span>({}, callback)
};

<span class="pl-k">const</span> <span class="pl-c1">addHeaders</span> <span class="pl-k">=</span> (<span class="pl-smi">header</span>, <span class="pl-smi">callback</span>) <span class="pl-k">=&gt;</span> {
	<span class="pl-k">const</span> <span class="pl-c1">newHeaders</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Headers</span>(header);
	<span class="pl-smi">newHeaders</span>.<span class="pl-en">save</span>().<span class="pl-en">then</span>((<span class="pl-smi">newHeaders</span>) <span class="pl-k">=&gt;</span> {
		<span class="pl-en">callback</span>(newHeaders);
	})
}

<span class="pl-smi">router</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>/<span class="pl-pds">'</span></span>, (<span class="pl-smi">req</span>, <span class="pl-smi">res</span>, <span class="pl-smi">next</span>) <span class="pl-k">=&gt;</span> {
  <span class="pl-en">getHeaders</span>((<span class="pl-smi">err</span>, <span class="pl-smi">headers</span>) <span class="pl-k">=&gt;</span> {
		<span class="pl-k">if</span>(err){
			<span class="pl-k">throw</span> err;
		}
		<span class="pl-smi">res</span>.<span class="pl-en">json</span>(headers);
	});
});

<span class="pl-smi">router</span>.<span class="pl-en">post</span>(<span class="pl-s"><span class="pl-pds">'</span>/<span class="pl-pds">'</span></span>, (<span class="pl-smi">req</span>, <span class="pl-smi">res</span>, <span class="pl-smi">next</span>) <span class="pl-k">=&gt;</span> {
	<span class="pl-k">const</span> <span class="pl-c1">header</span> <span class="pl-k">=</span> <span class="pl-smi">req</span>.<span class="pl-c1">body</span>;
  <span class="pl-en">console</span>.<span class="pl-c1">log</span>(header)
	<span class="pl-en">addHeaders</span>(header, (<span class="pl-smi">newHeaders</span>) <span class="pl-k">=&gt;</span> {
		<span class="pl-smi">res</span>.<span class="pl-en">json</span>(newHeaders);
	});
});

<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> router;</pre></div>
<h4><a id="user-content-config-webpack" class="anchor" href="#config-webpack" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>config webpack</h4>
<p><code>/webpack.config.js</code>
This is the file that's going to create bundle file compile all the JavaScript and the JSx, and it's also going to launch the development server.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> path <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>path<span class="pl-pds">'</span></span>);
<span class="pl-k">var</span> webpack <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>webpack<span class="pl-pds">'</span></span>);

<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
	entry<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>./client/index.js<span class="pl-pds">'</span></span>,
	output<span class="pl-k">:</span> {
		path<span class="pl-k">:</span> <span class="pl-smi">path</span>.<span class="pl-en">resolve</span>(<span class="pl-c1">__dirname</span>, <span class="pl-s"><span class="pl-pds">'</span>./dist/<span class="pl-pds">'</span></span>),
		filename<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>bundle.js<span class="pl-pds">'</span></span>
	},
	devServer<span class="pl-k">:</span> {
		inline<span class="pl-k">:</span> <span class="pl-c1">true</span>,
		port<span class="pl-k">:</span> <span class="pl-c1">50044</span>,
		historyApiFallback<span class="pl-k">:</span> <span class="pl-c1">true</span>
	},
	module<span class="pl-k">:</span> {
		loaders<span class="pl-k">:</span> [
			{
				test<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\.</span>js<span class="pl-k">$</span><span class="pl-pds">/</span></span>,
				exclude<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>node_modules<span class="pl-pds">/</span></span>,
				loader<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>babel-loader<span class="pl-pds">'</span></span>,
				query<span class="pl-k">:</span> {
					presets<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>es2015<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>stage-0<span class="pl-pds">'</span></span>],
					plugins<span class="pl-k">:</span> [
					    <span class="pl-s"><span class="pl-pds">'</span>react-html-attrs<span class="pl-pds">'</span></span>,
					    <span class="pl-s"><span class="pl-pds">'</span>transform-class-properties<span class="pl-pds">'</span></span>,
					    <span class="pl-s"><span class="pl-pds">'</span>transform-decorators-legacy<span class="pl-pds">'</span></span>
					]
				}
			},
			{
				test<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\.</span>css<span class="pl-k">$</span><span class="pl-pds">/</span></span>,
				exclude<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>node_modules<span class="pl-pds">/</span></span>,
				loader<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>style-loader!css-loader?sourceMap&amp;modules=true&amp;localIdentName=[name]__[local]___[hash:base64:5]<span class="pl-pds">'</span></span>
			},
		]
	},
	plugins<span class="pl-k">:</span> [
		<span class="pl-k">new</span> <span class="pl-en">webpack.DefinePlugin</span>({
    	    <span class="pl-s"><span class="pl-pds">'</span>process.env<span class="pl-pds">'</span></span><span class="pl-k">:</span> {
      	        <span class="pl-s"><span class="pl-pds">'</span>NODE_ENV<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-c1">process</span>.<span class="pl-smi">env</span>.<span class="pl-c1">NODE_ENV</span>
    	    }
  	    })
	]
}
</pre></div>
<blockquote>
<p><em>Hit me up if you have any questions regarding the project &gt; <a href="mailto:nasser.maronie@gmail.com">nasser.maronie@gmail.com</a></em></p>
</blockquote>
</article>
  </div>`;
