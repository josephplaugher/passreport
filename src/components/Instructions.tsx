import ritScoreAverages from "../images/ritscoreaverages.jpg";

export default function Instructions() {
    return (
        <div>
            <h1>HOW TO READ THE TEST RESULTS</h1>
            <p>
                The Personalized Achievement Summary System (PASS) is designed to identify the student's learning
                strengths and needs, and to help you select activities and materials, w h i c h will further aid them in the
                acquisition of knowledge. Please share the PASS results with the student at a level appropriate to his or her
                understanding and encourage him or her to work on the areas needing practice. Help the student view the
                PASS as a positive part of the learning experience rather than a test to be feared.
            </p>
            <p>
                Unlike other standardized tests you may have used in the past, the different levels of the PASS give each
                student the opportunity to succeed at his or her own level. In order to track the student's progress, we
                encourage you to test the student regularly with the PASS test and not rely on a single set of results.
            </p>

            <p className="fw-bold">Raw Score and Percent Right</p>

            <p>
                The Raw Score and Percent Right indicate whether your child had difficulty taking the test The Raw Score
                indicates the number correct out of the number possible on the test. The Percent Right is the number correct
                divided by the number possible. A score below 30% correct indicates that the test was too difficult for the
                student; a score more than 90% correct indicates the test was too easy for the student. In either case, the
                student should be tested with a more appropriate level when he or she takes the test in the future.
            </p>
            <h2>PERSONALIZED ACHIEVEMENT SUMMARY SYSTEM</h2>

            <p className="fw-bold">RIT Score</p>

            <p>
                The RIT score indicates the performance of your child in that subject. Like measures of height or weight, the RIT
                score indicates how much the student is growing in achievement in each subject. The table below shows the
                end-of-grade RIT score averages in each subject for students who took the PASS test. As with height or weight,
                children have their own unique patterns of growth. They can be low this year and then accelerate next year or
                score high this year and then level off before advancing again.
                It is unwise to be alarmed by a single
                test score.
            </p>
            <img src={ritScoreAverages} alt="RIT Score Averages" width="100%" height="auto" className="my-3" />
            <p>
                As the student is tested at regular intervals with the PASS test, this report will include all the scores which will
                make it possible to identify trends in the student's achievement growth. Regardless of your student's present
                performance, our goal is for every student to reach a RIT score of at least235 in reading, 240 in math, and 230
                in language before leaving elementary school. Over time, the student's increasing RIT scores show
                advancement toward these goals.
            </p>

            <h2>Hewitt and National Percentiles</h2>

            <p>
                The Hewitt percentile reflects how your child compared with other home-schooled students who have taken the
                PASS test. The national percentile reflects the linking of our PASS to the Metropolitan Achievement Test to give
                us national comparisons. It is important to note that the 50th percentile is an average score. For example, a 5oth
                percentile score means that 50 percent of the students tested scored below your student, while 49 percent
                scored above.
            </p>
            <p>
                There may be a discrepancy between these two percentiles. If so, please do not be concerned. If the national
                percentile is higher than the Hewitt percentile, please remember that the Metropolitan Test has a much broader
                base than does the PASS. In other words, your student may have been compared with hundreds of thousands
                of others who took the Metropolitan Test across the United States, but was compared with only thousands who
                took the PASS. We could use the example of a spelling bee. If a spelling bee were held in each of the 50 states
                with 1,000 students competing in each contest, the winner from each state would be in the top 90th percentile
                overall. If each state would then send their winning student to a national spelling bee to determine the best in
                the country, the percentile ranks of all students (49) except for the winning student (1) would drop in the national
                competition because they would now be compared to a smaller, more select group of students. With the Hewitt
                percentile, your child is being compared with fewer home-schooling students who consistently score above the
                national average on achievement tests.
            </p>

            <h2>Overall Performance and Goals</h2>

            <p>
                This section of the report provides an in-depth analysis of your child's performance and will prove valuable for
                developing lessons for your child. If your child's performance on a goal is low, you should give special attention
                to it as part of your instruction. If your student scored generally high, but average in one or two goals, work on
                those goals to help him or her move to an even higher level. Make every effort to keep your student's
                performance on these goals in mind as you develop lesson plans and teach. In time you will identify a variety of
                ways to help your child practice skills related to the goals on which his or her performance is low.
            </p>
        </div>
    )
}