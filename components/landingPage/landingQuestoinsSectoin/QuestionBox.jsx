import Question from './Question';
import CtaForm from '../CtaForm';

function QuestionBox() {
  return (
    <div id='landingQuestions'>
      <div id='landingQuestionsContainer'>
        <h1 id='QA-title'>Frequently Asked Questions</h1>
        <ul id='QA-box'>
          <Question
            question='How much does Netflix const?'
            answer="Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more
            on thousands of internet-connected devices. You can watch as
            much as you want, whenever you want without a single commercial
            – all for one low monthly price. There's always something new to
            discover and new TV shows and movies are added every week!"
          />
          <Question
            question='what is netflix?'
            answer='Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from $8.99 to $17.99 a month. No extra costs, no contracts.'
          />
          <Question
            question='Wherecan I watch?'
            answer=" Watch anywhere, anytime, on an unlimited number of devices. Sign
                in with your Netflix account to watch instantly on the web at
                netflix.com from your personal computer or on any
                internet-connected device that offers the Netflix app, including
                smart TVs, smartphones, tablets, streaming media players and
                game consoles. You can also download your favorite shows with
                the iOS, Android, or Windows 10 app. Use downloads to watch
                while you're on the go and without an internet connection. Take
                Netflix with you anywhere."
          />
          <Question
            question=' How do I cancel?'
            answer=' Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.'
          />
          <Question
            question='What can I watch on Netflix?'
            answer='  Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.'
          />
          <Question
            question='Is Netflix good for kids?'
            answer='   The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and movies in their own space. Kids profiles come with
                PIN-protected parental controls that let you restrict the
                maturity rating of content kids can watch and block specific
                titles you don’t want kids to see.'
          />
          <CtaForm />
        </ul>
      </div>
    </div>
  );
}

export default QuestionBox;
