import execa from 'execa';
import test from 'ava';

test('show help screen', async t => {
	const res = await execa('./cli.js', ['--help']);
	t.regexTest(/Detect keyboard layout on Linux/, res.stdout);
});

test('get keyboard layout', async t => {
	const res = await execa('./cli.js');
	t.true(res.stdout.length > 0);
});
