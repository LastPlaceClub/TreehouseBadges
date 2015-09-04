var mom  = {name:'mom',  jobs:{}},
    dad  = {name:'dad',  jobs:{}},
    billy= {name:'billy',jobs:{}},
    sally= {name:'sally',jobs:{}};

// chores
var wash=   {job:'wash',who:{}},
    dry =   {job:'dry', who:{}},
    mop =   {job:'mop', who:{}},
    cook=   {job:'cook',who:{}};

var people = {
    mom:mom,
    dad:dad,
    billy:billy,
    sally:sally
};

var jobs = {
    mop:mop,
    cook:cook,
    wash:wash,
    dry:dry
};

wash.who = {mom:mom,billy:billy};
dry.who  = {dad:dad,billy:billy,sally:sally};
cook.who = {dad:dad,sally:sally};
mop.who  = {dad:dad,mom:mom};

mom.jobs  = {wash:wash,mop:mop};
dad.jobs  = {dry:dry,cook:cook,mop:mop};
sally.jobs= {dry:dry,cook:cook};
billy.jobs= {wash:wash,dry:dry};

function hasJob(personStr, jobStr) {
    return (jobStr in people[personStr].jobs)
};

function hasJob(personObj, jobObj) {
    return (jobObj.job in personObj.jobs)
};

function peopleDoing(jobName) {
    result = [];
    var whoDoesIt = (jobs[jobName].who);
    for(var name in whoDoesIt){
        result.push(whoDoesIt[name])
    }
    return result;
};

function jobsDoneBy(personName) {
    result = [];
    var tasks = people[personName].jobs;
    for (var jobName in tasks) {
        result.push(jobs[jobName])
    }
    return result
};

// takes strings
function intersectJobs(nameA, nameB) {
    var result1 = [];
    var result2 = [];

    if(typeof(nameA === 'object')) {
        nameA = nameA.name
    } else {
        nameA = nameA
    }

    if(typeof(nameB === 'object')) {
        nameB = nameB.name
    } else {
        nameA = nameA
    }
    
    var name1 = people[nameA].jobs;
    var name2 = people[nameB].jobs;

    for(var key1 in name1){
        result1.push(jobs[key1])
    }

    for(var key2 in name2) {
        result2.push(jobs[key2])
    }

    var same = _.intersection(result1, result2);
    return same;

};

// takes strings
function similarity(personA, personB){
    var one = Object.keys(people[personA].jobs).length
    var two = Object.keys(people[personB].jobs).length

    if (one > two) {
       return ((intersectJobs(personA, personB).length) / one);
    } else {    
        return ((intersectJobs(personA, personB).length) / two);
    }
};

// takes strings
function score(job,person) {
    var array = [];
    var test = [];
    var personB = peopleDoing(job)
    for (var i = 0; i < personB.length; i ++) {
        array.push(personB[i].name);
        test.push((similarity(person, array[i])));
    }
    return eval(test.join('+'));
};

// takes an object
function recommendJobsFor(person) {
    var does = person.jobs;
    var array = [];
    var potentialJobs = _.omit(jobs, Object.keys(does))
    
    for(var key in potentialJobs) {
        array.push({job: key, score: score(key, (person.name))})
    }

   return array.sort(function(a, b){
        return array[1].score - array[0].score
    })
    
};
