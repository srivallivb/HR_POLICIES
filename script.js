document.getElementById('askButton').addEventListener('click', function() {
    const hrPolicy = document.getElementById('hrPolicy').value;
    const query = document.getElementById('query').value.trim();
    const responseDiv = document.getElementById('response');
    const sourceDiv = document.getElementById('source');

    // Example questions:
    // How many casual leaves are allowed?
    // What’s the notice period for resignation?
    // Is there work-from-home allowed on Fridays?

    // keyword-based search for demonstration
    let response = '';
    let source = '';

   const hrPolicies = [
    {
        keywords: ['casual leaves'],
        response: 'You are allowed 10 casual leaves per year.',
        source: 'Section 2.1: Leave Policy'
    },
    {
        keywords: ['notice period'],
        response: 'The notice period for resignation is 30 days.',
        source: 'Section 3.2: Resignation Policy'
    },
    {
        keywords: ['work-from-home', 'fridays'],
        response: 'Yes, work-from-home is allowed on Fridays.',
        source: 'Section 4.3: Work-from-Home Policy'
    }
];

const normalizedQuery = query.toLowerCase();

    for (const policy of hrPolicies) {
        const allKeywordsMatch = policy.keywords.every(keyword =>
            normalizedQuery.includes(keyword)
        );
        if (allKeywordsMatch) {
            response = policy.response;
            source = policy.source;
            break;
        }
    }
    responseDiv.textContent = response || 'Sorry, I could not find an answer to your question.';
    sourceDiv.textContent = source ? `Source: ${source}` : '';
});
