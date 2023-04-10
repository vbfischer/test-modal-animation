import React from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Content, Overlay, Portal, Root } from "@radix-ui/react-dialog";
import { animated, useTransition } from "@react-spring/web";
import { CSSTransition } from "react-transition-group";

export const ScaleDialog = NiceModal.create(() => {
  const modal = useModal();

  const transitions = useTransition(modal.visible, {
    from: { scale: 0, opacity: 0 },
    enter: { scale: 1, opacity: 1 },
    leave: { scale: 0, opacity: 0 },
  });

  return (
    <>
      {transitions((styles, item) =>
        item ? (
          <Root
            open={item}
            onOpenChange={() => {
              modal.hide();
            }}
          >
            <Portal>
              <Overlay className="DialogOverlay" forceMount asChild>
                <animated.div style={{ opacity: styles.opacity }} />
              </Overlay>
              <Content className="DialogContent" forceMount asChild>
                <animated.div style={styles}>
                  <div>This is the content</div>
                </animated.div>
              </Content>
            </Portal>
          </Root>
        ) : null
      )}
    </>
  );
});

export const TransformDialog = NiceModal.create(() => {
  const modal = useModal();

  const transitions = useTransition(modal.visible, {
    from: { transform: "translateX(2000px)", opacity: 0 },
    enter: { transform: "translateX(0)", opacity: 1 },
    leave: { transform: "translateX(2000px)", opacity: 0 },
  });

  return (
    <>
      {transitions((styles, item) =>
        item ? (
          <Root
            open={item}
            onOpenChange={() => {
              modal.hide();
            }}
          >
            <Portal>
              <Overlay className="DialogOverlay" forceMount asChild>
                <animated.div style={{ opacity: styles.opacity }} />
              </Overlay>
              <Content className="DialogContent" forceMount asChild>
                <animated.div style={styles}>
                  <div>This is the content</div>
                </animated.div>
              </Content>
            </Portal>
          </Root>
        ) : null
      )}
    </>
  );
});

export const TransitionGroupDialog = NiceModal.create(() => {
  const modal = useModal();

  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <CSSTransition
      nodeRef={ref}
      in={modal.visible}
      timeout={500}
      classNames="fade"
      mountOnEnter={true}
      unmountOnExit={true}
    >
      <Root
        open={true}
        onOpenChange={() => {
          modal.hide();
        }}
      >
        <Portal>
          <Overlay className="DialogOverlay" forceMount asChild />
          <Content className="DialogContent" forceMount asChild>
            <div ref={ref}>
              <div>This is the content</div>
            </div>
          </Content>
        </Portal>
      </Root>
    </CSSTransition>
  );
});
