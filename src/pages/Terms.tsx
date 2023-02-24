import React from "react";
import { PageLayout } from "../components";

const Terms: React.FC = () => {
  return (
    <PageLayout>
      <div className="w-full flex flex-col items-center px-4">
        <div className="p-6 my-10 bg-white rounded-lg lg:w-1/2">
          <div className="w-full text-center">
            <h1 className="text-3xl font-bold">Terms & Conditions</h1>
          </div>
          <div className="mt-6 w-full flex flex-col items-center">
            <div className="w-full">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                in rutrum lorem. Morbi lectus ipsum, cursus vitae dictum ac,
                sagittis at ante. Vestibulum et nunc ut lacus elementum lacinia.{" "}
                <span className="font-bold">
                  Maecenas sed ante id magna consectetur volutpat. Curabitur
                  accumsan, quam et lacinia pellentesque, sapien tortor varius
                  diam, et blandit eros augue nec libero. Nunc vel lorem urna.
                  Phasellus orci neque, commodo in orci nec, ullamcorper luctus
                  velit. Fusce tincidunt libero tortor, in malesuada nibh
                  sodales vel.{" "}
                </span>
                <span className="italic">
                  Morbi tempus fermentum sagittis. Mauris imperdiet, purus et
                  varius commodo, odio est efficitur erat, eu hendrerit sem odio
                  eget justo. In semper ligula nisl, sit amet porta libero
                  posuere vitae. Suspendisse pulvinar nunc vel nisl commodo
                  placerat. Mauris id mi sed orci suscipit porttitor nec eu
                  nisl. Etiam bibendum lorem eu porta porta. Proin est sapien,
                  hendrerit id aliquet nec, bibendum non lacus. Sed ullamcorper
                  blandit nisl, ut eleifend lorem.
                </span>
              </p>
              <br />
              <p>
                Integer enim nibh, posuere non laoreet et, ullamcorper vel
                purus:
                <ol className="list-disc ml-6">
                  <li>Vestibulum in est a lectus congue accumsan.</li>
                  <li>
                    Aenean sed velit posuere, vehicula orci ut, tincidunt risus.
                  </li>
                  <li>
                    Morbi lorem neque, dapibus in dolor quis, laoreet volutpat
                    ante.
                  </li>
                </ol>{" "}
                Curabitur vestibulum accumsan augue, eget pulvinar est
                scelerisque et. Donec risus mauris, dapibus a feugiat id,
                ultrices tincidunt risus. Curabitur suscipit, nunc non luctus
                varius, metus massa molestie augue, feugiat varius orci sapien
                quis ex.
                <ol className="list-decimal ml-6">
                  <li>Duis varius turpis risus, at accumsan ex suscipit at.</li>
                  <li>Donec id dignissim quam, eu interdum tortor.</li>
                  <li>Fusce nec venenatis nulla.</li>
                </ol>{" "}
                Morbi mollis metus purus, vehicula ultricies nisi porttitor non.
                Nunc ultricies ante nunc, et vehicula erat efficitur sit amet.
                Nam euismod sapien nibh, at sodales dolor rhoncus at. Duis vel
                risus non velit vehicula eleifend nec ac mauris.
              </p>
              <br />
              <p>
                Etiam sit amet ipsum dictum, mattis sapien ut, ullamcorper
                justo. Mauris eget nibh odio. Cras nec faucibus erat. Cras
                cursus pharetra erat posuere suscipit. Proin eget dolor nec
                sapien fringilla varius. Cras feugiat fringilla iaculis. Sed
                sagittis dolor vitae sapien ullamcorper, ac blandit leo blandit.
                Integer eu hendrerit tortor, id mollis quam. Suspendisse mollis
                nulla leo, sed egestas felis congue ac. Nunc felis metus,
                ultrices at nisl eget, tristique tincidunt urna. Quisque
                tristique ullamcorper metus non tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Terms;
