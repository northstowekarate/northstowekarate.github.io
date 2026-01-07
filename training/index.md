---
layout: base.njk
title: "Northstowe Karate Club Training Schedule"
description: "Join Shotokan Karate classes in Northstowe for beginners to black belts. Sessions on Wednesdays 6:30–7:30pm and Sundays 3–4pm."
date: "git Last Modified"
changeFrequency: weekly
headerContent: |
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": "https://www.northstowekarate.com/training/#schedule",
        "@type": "EventSeries",
        "name": "Northstowe Karate Weekly Classes",
        "description": "Family Friendly Shotokan Karate classes for ages 8+ held weekly in Northstowe, led by Chief Instructor Simon Apen-Sadler.",
        "startDate": "2024-07-03",
        "eventSchedule": [
          {
            "@type": "Schedule",
            "byDay": "Wednesday",
            "startTime": "18:30",
            "endTime": "19:30",
            "scheduleTimezone": "Europe/London"
          },
          {
            "@type": "Schedule",
            "byDay": "Sunday",
            "startTime": "15:00",
            "endTime": "16:00",
            "scheduleTimezone": "Europe/London"
          }
        ],
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "organizer": {
          "@id": "https://www.northstowekarate.com/#northstowekarateclub"
        },
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
          "@id": "https://www.northstowekarate.com/training/#thecabin"
        },
        "image": "https://www.northstowekarate.com/static/logo.webp",
        "url": "https://www.northstowekarate.com/training/"
      },
      {
        "@id": "https://www.northstowekarate.com/training/#thecabin",
        "@type": "SportsActivityLocation",
        "name": "Northstowe Community Centre (The Cabin)",
        "image": "https://www.northstowekarate.com/static/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1 The Green, Pathfinder Way, Northstowe",
          "addressLocality": "Northstowe",
          "addressRegion": "Cambridgeshire",
          "postalCode": "CB24 1FD",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 52.2885, 
          "longitude": 0.051
        },
        "hasMap": "https://maps.app.goo.gl/wXcMAGknwyPFEgMp6",
        "url": "https://www.northstowekarate.com",
        "telephone": "+447596922670",
        "openingHours": "Wednesday 18:30-19:30, Sunday 15:00-16:00",
        "priceRange": "£",
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Accessible entrance",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Changing facilities",
            "value": true
          }
        ],
        "description": "Family Friendly Shotokan Karate classes for ages 8+ held weekly in Northstowe, led by Chief Instructor Simon Apen-Sadler."
      }
    ]
  }
  </script>

priority: 0.9
---
# Club Training Schedule

Find all the details about our karate training sessions here, including times and locations. Our classes are open to children (ages 8+), adults, and families - beginners are always welcome! Please [book early](/lesson-booking/), as spaces can fill up quickly. If you’re new, see our [What to Expect](/training/what-to-expect/) and [FAQ](/faq/) pages for tips on your first session.

## Regular sessions
We train regularly on Wednesdays at [The Cabin, Northstowe](https://maps.app.goo.gl/wXcMAGknwyPFEgMp6) between 6.30-7.30pm and on Sundays 3-4pm.

<section id="upcoming-events" class="mb-4" style="display:none;">


  <!-- Next session (routine lesson) -->
  <div id="next-session" class="mb-3" aria-live="polite" aria-atomic="true"></div>
  
  <h2>Upcoming events</h2>
  <div id="special-events" class="mb-3" aria-live="polite"></div>
</section>

<section id="upcoming-lessons" class="mb-4">
  <h2>Next session</h2>

  <div>
    <h3 class="h5">Upcoming sessions</h3>
    <div class="table-responsive">
      <table class="table table-sm table-striped" id="upcoming-table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Location</th>
            <th scope="col">Notes</th>
          </tr>
        </thead>
        <tbody id="upcoming-tbody"></tbody>
      </table>
    </div>
  </div>

  <details id="more-events" class="mt-3">
    <summary class="btn btn-outline-secondary">Show full schedule</summary>
    <div class="table-responsive mt-2">
      <table class="table table-sm table-striped" id="more-table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Location</th>
            <th scope="col">Notes</th>
          </tr>
        </thead>
        <tbody id="more-tbody"></tbody>
      </table>
    </div>
  </details>
</section>

<script id="training-data" type="application/json">
[
  {"id":"Northstowe Karate Club Training","datetime":"2026-01-14T18:30:00","label":"Wednesday 14 Jan 18:30–19:30","location":"The Cabin","locationLink":"#location-cabin","notes":"","type":"lesson"},
  {"id":"Northstowe Karate Club Training","datetime":"2026-01-18T15:00:00","label":"Sunday 18 Jan 15:00–16:00","location":"The Cabin","locationLink":"#location-cabin","notes":"","type":"lesson"},
  {"id":"Northstowe Karate Club Training","datetime":"2026-01-21T18:30:00","label":"Wednesday 21 Jan 18:30–19:30","location":"The Cabin","locationLink":"#location-cabin","notes":"Limited space","type":"lesson"},
  {"id":"Northstowe Karate Club Training","datetime":"2026-01-25T15:00:00","label":"Sunday 25 Jan 15:00–16:00","location":"The Cabin","locationLink":"#location-cabin","notes":"","type":"lesson"},
  {"id":"Northstowe Karate Club Training","datetime":"2026-01-28T18:30:00","label":"Wednesday 28 Jan 18:30–19:30","location":"The Cabin","locationLink":"#location-cabin","notes":"","type":"lesson"},
  {"id":"Northstowe Karate Club Training","datetime":"2026-02-01T15:00:00","label":"Sunday 1 Feb 15:00–16:00","location":"The Cabin","locationLink":"#location-cabin","notes":"","type":"lesson"},
  {"id":"Northstowe Karate Club Training","datetime":"2026-02-04T18:30:00","label":"Wednesday 4 Feb 18:30–19:30","location":"The Cabin","locationLink":"#location-cabin","notes":"","type":"lesson"},
  {"id":"Northstowe Karate Club Training","datetime":"2026-02-08T15:00:00","label":"Sunday 8 Feb 15:00–16:00","location":"The Cabin","locationLink":"#location-cabin","notes":"","type":"lesson"},
  {"id":"Northstowe Karate Club Training","datetime":"2026-02-11T18:30:00","label":"Wednesday 11 Feb 18:30–19:30","location":"The Cabin","locationLink":"#location-cabin","notes":"","type":"lesson"},
  {"id":"Northstowe Karate Club Training","datetime":"2026-02-15T15:00:00","label":"Sunday 15 Feb 15:00–16:00","location":"The Cabin","locationLink":"#location-cabin","notes":"","type":"lesson"},
  {"id":"Northstowe Karate Club Training","datetime":"2026-02-18T18:30:00","label":"Wednesday 18 Feb 18:30–19:30","location":"The Cabin","locationLink":"#location-cabin","notes":"Limited space","type":"lesson"},
  {"id":"Northstowe Karate Club Training","datetime":"2026-02-22T15:00:00","label":"Sunday 22 Feb 15:00–16:00","location":"The Cabin","locationLink":"#location-cabin","notes":"","type":"lesson"},
  {"id":"Northstowe Karate Club Training","datetime":"2026-02-25T18:30:00","label":"Wednesday 25 Feb 18:30–19:30","location":"The Cabin","locationLink":"#location-cabin","notes":"","type":"lesson"},
  {"id":"5th JSKE Spring Course - 2026-03-14","datetime":"2026-03-14","label":"JSKE Spring Course","location":"University of Hertfordshire Sports Village","notes":"This is a fantastic opportunity for <em>all grades</em> to train with senior instructors including Kawasoe sensei 8th Dan, Tomlin sensei 7th Dan and Hori sensei 6th Dan.","type":"grading","highlight":true, "locationLink":"https://maps.app.goo.gl/sZ71xCYXJVMWFpax7", "eventLink":"https://jske.co.uk/events/"},
  {"id":"Grading at Cambridge Karate Dojo - 2026-03-21-1300","datetime":"2026-03-21T13:00:00","label":"Grading Day — All Grades","location":"Cambridge Karate Dojo","locationLink":"https://maps.app.goo.gl/U4deyuiXhWkr169A9","notes":"Grading — bring gi and licence","type":"grading","highlight":true},
  {"id":"JK WF England Spring Camp - 2026-05-08","datetime":"2026-05-08","label":"JKA WF Englang Spring Camp 2026","location":"Windsor Leisure Centre","locationLink":"https://maps.app.goo.gl/gaCfrptYV93ivfce8","notes":"3 day training camp in Windsor with Kawasoe Sensei, Izumiya Sensei and Nemoto Sensei. This is another excellent opportunity to train with Kawasoe sensei, as well as instructors from JKA HQ. It's primarily aimed at brown belt and above but lower grades can also attend.","type":"gasshuku","highlight":true}
]
</script>

<script>
(function(){
  const cfg = { upcomingCount: 4, locale: 'en-GB', timeZone: 'Europe/London' };
  const raw = document.getElementById('training-data').textContent.trim();
  let events = JSON.parse(raw || '[]')
    .map(e => ({...e, date: new Date(e.datetime)}))
    .filter(e => !isNaN(e.date));

  events.sort((a,b) => a.date - b.date);

  const now = new Date();
  const future = events.filter(e => e.date >= now);

  // Separate special events (gradings) from routine lessons
  const specialEvents = future.filter(e => e.type === 'grading' || e.highlight);
  const routine = future.filter(e => !(e.type === 'grading' || e.highlight));

  const nextOverall = future.length ? future[0] : null;
  const nextRoutine = routine.length ? routine[0] : null;

  const formatDate = d => d.toLocaleDateString(cfg.locale, { weekday: 'short', day: 'numeric', month: 'short', timeZone: cfg.timeZone });
  const formatTime = d => d.toLocaleTimeString(cfg.locale, { hour: '2-digit', minute: '2-digit', timeZone: cfg.timeZone });

  function badgeHtml(ev){
    if(!ev) return '';
    if(ev.type === 'grading') return `<span class="badge badge-brown ms-2">Grading</span>`;
    if(ev.highlight) return `<span class="badge bg-warning text-dark ms-2">Event</span>`;
    return '';
  }

  function linkLabel(ev){
    return ev && ev.eventLink ? `<a href="${ev.eventLink}">${ev.label}</a>` : `${ev.label}`;
  }

  // Render special events as cards (highlighted)
  const specialSection = document.getElementById('upcoming-events');
  const specialEl = document.getElementById('special-events');
  if(specialEvents.length){
    specialSection.style.display = '';
    specialEl.innerHTML = specialEvents.map(ev => `
      <div class="card p-3 mb-2 event-highlight">
        <div><strong>${linkLabel(ev)}</strong> ${badgeHtml(ev)}</div>
        <div class="small text-muted">${formatDate(ev.date)} — ${formatTime(ev.date)} | ${ev.locationLink ? `<a href="${ev.locationLink}">${ev.location}</a>` : ev.location}</div>
        ${ev.notes ? `<div class="mt-1 text-danger small">${ev.notes}</div>` : ''}
        ${ev.eventLink ? `<div class="mt-2"><a class="btn btn-brown btn-sm" href="${ev.eventLink}">Event details</a></div>` : ''}
      </div>
    `).join('');
  } else {
    specialSection.style.display = 'none';
    specialEl.innerHTML = '';
  }

  // Render next session (routine) prominently
  const nextEl = document.getElementById('next-session');
  if(nextRoutine){
    nextEl.innerHTML = `
      <div class="card bg-light p-3">
        <strong>Next session:</strong>
        <div class="mt-1">
          ${nextRoutine.eventLink ? `<a href="${nextRoutine.eventLink}">${nextRoutine.label}</a>` : `${nextRoutine.label}`} ${badgeHtml(nextRoutine)}
          <div class="small text-muted">${formatDate(nextRoutine.date)} — ${formatTime(nextRoutine.date)}</div>
          ${nextRoutine.notes ? `<div class="text-danger small mt-1">${nextRoutine.notes}</div>` : ''}
          <div class="mt-2"><a class="btn btn-brown btn-sm" href="/lesson-booking/" role="button">Book a free class</a></div>
        </div>
      </div>`;
  } else {
    nextEl.innerHTML = `<div class="alert alert-secondary">No upcoming sessions are scheduled at the moment.</div>`;
  }

  // Render upcoming routine sessions in table (first N after the next one)
  const N = cfg.upcomingCount;
  const startIndex = nextRoutine ? 1 : 0;
  const upcoming = routine.slice(startIndex, startIndex + N);
  const upcomingTbody = document.getElementById('upcoming-tbody');
  upcomingTbody.innerHTML = upcoming.length ? upcoming.map(ev => `
    <tr class="${ev.highlight ? 'event-row' : ''}">
      <td>${ev.eventLink ? `<a href="${ev.eventLink}">${formatDate(ev.date)}</a>` : formatDate(ev.date)}</td>
      <td>${formatTime(ev.date)}</td>
      <td>${ev.locationLink ? `<a href="${ev.locationLink}">${ev.location}</a>` : ev.location}</td>
      <td>${ev.notes || ''}</td>
    </tr>
  `).join('') : `<tr><td colspan="4" class="small text-muted">No more sessions scheduled in the short term.</td></tr>`;

  // Remaining routine events into more-table
  const more = routine.slice(startIndex + N);
  const moreTbody = document.getElementById('more-tbody');
  if(more.length){
    moreTbody.innerHTML = more.map(ev => `
      <tr class="${ev.highlight ? 'event-row' : ''}">
        <td>${ev.eventLink ? `<a href="${ev.eventLink}">${formatDate(ev.date)}</a>` : formatDate(ev.date)}</td>
        <td>${formatTime(ev.date)}</td>
        <td>${ev.locationLink ? `<a href="${ev.locationLink}">${ev.location}</a>` : ev.location}</td>
        <td>${ev.notes || ''}</td>
      </tr>
    `).join('');
    document.getElementById('more-events').open = false;
  } else {
    document.getElementById('more-events').style.display = 'none';
  }
})();
</script>

### Cancellation

Should you need to cancel, please do so with at least 24 hours' notice by removing your name from the spreadsheet and emailing the club. If you cancel within 24 hours' notice or are a no-show, you will be charged for the lesson.

## Locations
<h3 id="location-cabin">The Cabin</h3>

1 The Green, Pathfinder Way, Northstowe, Cambridge, CB24 1FD

Parking is available outside. Additional parking can be found nearby at either Pathfinder Primary School or Longstanton Park and Ride.

<iframe title="Map to Northstowe Karate Club" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2440.596309193821!2d0.0479411!3d52.2870305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d875d0a30dc935%3A0xdf1f6f7f737e8109!2sNorthstowe%20Karate%20Club!5e0!3m2!1sen!2suk!4v1767020089596!5m2!1sen!2suk" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

